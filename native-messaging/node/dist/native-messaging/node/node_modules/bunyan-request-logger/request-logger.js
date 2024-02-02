'use strict';

var
  // Lightweight logging library:
  bunyan = require('bunyan'),

  // For the request ID:
  cuid = require('cuid'),

  // For object property overrides:
  mixIn = require('mout/object/mixIn'),

  /**
   * Get long stack traces for the error logger.
   * @param  {error} err Error object
   * @return {string}    Stack trace
   */
  getFullStack = function getFullStack(err) {
    var ret = err.stack || err.toString(),
      cause;

    if (err.cause && typeof (err.cause) === 
        'function') {
      cause = err.cause();
      if (cause) {
        ret += '\nCaused by: ' +
          getFullStack(cause);
      }
    }
    return ret;
  },

  // To create a custom Bunyan serializer,
  // just return the desired object
  // serialization.
  // 
  // Regardless of your serialization settings,
  // all bunyan messages automatically include:
  // 
  // * App name
  // * hostname
  // * pid (Process ID)
  // * Log level
  // * Whatever object you pass in to be logged
  // * An optional message (default: empty string)
  // * Timestamp
  // * Log format version number
  serializers = {
    req: function reqSerializer(req) {
      if (!req || !req.connection) {
        return req;
      }

      return {
        url: req.url,
        method: req.method,
        protocol: req.protocol,
        requestId: req.requestId,

        // In case there's a proxy server:
        ip: req.headers['x-forwarded-for'] ||
          req.connection.remoteAddress,
        headers: req.headers
      };
    },
    res: function resSerializer(res) {
      if (!res) {
        return res;
      }

      return {
        statusCode: res.statusCode,
        headers: res._header,
        requestId: res.requestId,
        responseTime: res.responseTime
      };
    },
    err: function errSerializer(err) {
      if (!err || !err.stack) {
        return err;      
      }

      return {
          message: err.message,
          name: err.name,
          stack: getFullStack(err),
          code: err.code,
          signal: err.signal,
          requestId: err.requestId
      };    
    }
  },

  // Bunyan offers lots of other options,
  // including extensible output stream types.
  // 
  // You might be interested in
  // node-bunyan-syslog, in particular.
  defaults = {
    name: 'unnamed app',
    serializers: mixIn({}, bunyan.stdSerializers,
      serializers)
  },

  /**
   * Take bunyan options, monkey patch request
   * and response objects for better logging,
   * and return a logger instance.
   * 
   * @param  {object}  options See bunyan docs
   * @param  {boolean} options.logParams
   *         Pass true to log request parameters
   *         in a separate log.info() call.
   * @return {object}  logger  See bunyan docs
   * @return {function} logger.requestLogger
   *                    (See below)
   */
  createLogger = function (options) {
    var settings = mixIn({}, defaults, options),
      log = bunyan.createLogger(settings);

    log.requestLogger = function
        createRequestLogger() {

      return function requestLogger(req, res,
          next) {

        // Used to calculate response times:
        var startTime = new Date();

        // Add a unique identifier to the request.
        req.requestId = cuid();

        // Log the request
        log.info({req: req});

        // Make sure responses get logged, too:
        req.on('end', function () {
          res.responseTime = new Date() - startTime;
          res.requestId = req.requestId;
          log.info({res: res});
        });

        next();
      };
    };

    log.errorLogger = function
        createErrorLogger() {

      return function errorLogger(err, req, res,
          next) {
        var status = err.status || res && res.status;

        // Add the requestId so we can link the
        // error back to the originating request.
        err.requestId = req && req.requestId;

        // Omit stack from the 4xx range
        if (status >= 400 &&
            status <=499) {
          delete err.stack;
        }

        log.error({err: err});
        next(err);
      };
    };

    // Tracking pixel / web bug
    // 
    // Using a 1x1 transparent gif allows you to
    // use the logger in emails or embed the 
    // tracking pixel on third party sites without
    // requiring to JavaScript.
    log.route = function route() {
      return function pixel(req, res) {
        var data;

        if (settings.logParams && req.params) {
          data = mixIn({}, req.params, {
            requestId: req.requestId
          });
          log.info(req.params);
        }

        res.header('content-type', 'image/gif');

        // GIF images can be so small, it's
        // easy to just inline it instead of
        // loading from a file:
        res.send(
          'GIF89a\u0001\u0000\u0001\u0000' +
          '\u00A1\u0001\u0000\u0000\u0000\u0000' +
          '\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF' +
          '\u00FF\u00FF\u00FF\u0021\u00F9\u0004' +
          '\u0001\u000A\u0000\u0001\u0000\u002C' +
          '\u0000\u0000\u0000\u0000\u0001\u0000' +
          '\u0001\u0000\u0000\u0002\u0002\u004C' +
          '\u0001\u0000;');
      };
    };

    return log;
  };

module.exports = createLogger;

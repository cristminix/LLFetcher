#!/bin/env node

// yargsArgParser.js
const yargs = require('yargs');

const args = yargs

  .option('header', {
    // alias: 'o',
    describe: 'Header',
    type: 'string',
  })
  .argv;

console.log("Parsed arguments:", args);


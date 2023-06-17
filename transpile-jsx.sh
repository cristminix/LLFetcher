#!/bin/bash

export PATH=`pwd`/node_modules/.bin:$PATH
esbuild   dist/lib/app.jsx --outfile=dist/lib/app.js --watch
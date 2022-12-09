#!/usr/bin/env bash

cwd=`pwd`
cd tools/log-server
echo `pwd`
node index.js
cd "$cwd"
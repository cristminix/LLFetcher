#!/usr/bin/env bash
rm -fv chrome_extension/*.hot-update.*
rm -fv chrome_extension/vendor*
npx webpack-dev-server
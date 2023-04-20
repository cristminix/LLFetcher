@echo off
set PATH=%~dp0\node_modules\.bin;%PATH%
esbuild   dist/lib/app.jsx --outfile=dist/lib/app.js --watch
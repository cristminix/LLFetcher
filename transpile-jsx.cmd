@echo off
set PATH=%~dp0\node_modules\.bin;%PATH%
esbuild   dist/app.jsx --outfile=dist/app.js
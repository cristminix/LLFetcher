#!/usr/bin/env bash
# ./rebuild_popup_html.sh
cwd=`pwd`
echo $cwd
echo "moving scripts"
mv chrome_extension/popup/* chrome_extension/
mv chrome_extension/content_scripts/* chrome_extension/
mv chrome_extension/content_scripts_inject/* chrome_extension/
mv chrome_extension/service_workers/* chrome_extension/
rm -rf chrome_extension/{popup,content_scripts,content_scripts_inject,service_workers}
current_script_cwd="${0%/*}"
ffplay -autoexit -nodisp $current_script_cwd/hero.wav 2> /dev/null
curl localhost:7700/reload
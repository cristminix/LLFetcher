#!/usr/bin/env bash
./rebuild_popup_html.sh
ffplay -autoexit -nodisp hero.wav 2> /dev/null
curl localhost:7700/reload
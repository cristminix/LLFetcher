#!/usr/bin/env bash
./rebuild_popup_html.sh
ffplay -autoexit -nodisp hero.wav
curl localhost:7700/reload
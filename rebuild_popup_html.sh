#!/usr/bin/env bash

old_file=
new_file=

for n in chrome_extension/vendor*.js 
do 
	if [ "$old_file" -ot "$n" ]; then
    	new_file="$n"
	fi
	old_file=$new_file
done

firstString=""
secondString=""
new_file="${new_file/chrome_extension\//"$secondString"}" 
script_content_1='<script src="'$new_file'"></script>'

script_file_1=$new_file
old_file=
new_file=
for n in chrome_extension/*hot-update.js 
do 
	if [ "$old_file" -ot "$n" ]; then
    	new_file="$n"
	fi
	old_file=$new_file
done
firstString=""
secondString=""

new_file="${new_file/chrome_extension\//"$secondString"}" 
script_content_2='<script src="'$new_file'"></script>'

script_file_2=$new_file
script_file_3=popup.js

script_content_3='<script src="popup.js"></script>'

target_file_tmp=chrome_extension/popup.html.tmp
target_file=chrome_extension/popup.html

echo > $target_file_tmp
cat chrome_extension/templates/popup_open.html >> $target_file_tmp
# vendor script
echo $script_content_1 >> $target_file_tmp
# hot-update
# echo $script_content_2 >> $target_file_tmp
# popup.js
echo $script_content_3 >> $target_file_tmp

cat chrome_extension/templates/popup_close.html >> $target_file_tmp



sha_t1=`sha1sum -t $target_file`
sha_t1="${sha_t1/$target_file/}"

sha_t2=`sha1sum -t $target_file_tmp`
sha_t2="${sha_t2/$target_file_tmp/}"

# echo $sha_t1
# echo $sha_t2

sould_update=0

if [ "$sha_t1" != "$sha_t2" ]; then
	should_update=1
  	echo "deleting old $target_file"
  	echo "updating $target_file"
  	mv "$target_file_tmp" "$target_file"
fi
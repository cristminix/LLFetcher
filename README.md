# **LLFetcher**
**LLFetcher** is stand for *Linked Learning Fetcher* which is just a simple chrome extension purposed to enable you easily download course content resources including course video with multiple size format, video caption or transcript, exercise file from E-Learning website specially Linked In Learning.

# **How to install this extension to your Chrome browser**
To install this chrome extension manually we recommend you download zip file in from the release page, since this page created.

# **Downloading and installing this extension**
1. Grab in this release file [LLFetcher-1.0.1.zip](https://github.com/cristminix/LLFetcher/releases/download/v1.0.1/LLFetcher-1.0.1.zip) then download to whatever directory you wants.
2. Extract / Unzip this file 
3. Open google chrome
4. Go to settings -->  extensions
5. In the extensions tab click Enable developer mode
6. Then click in the Load Unpacked  
7. Next locate to project directory and Choose chrome_extension folder

# **Using this chrome extension**
To be able to successfully using this stuff you might prepare for high and stable internet connection speed, and the rest you have to land to valid Linked In Learning course page and you must logedin or if you were not , this extension will went inactive or gone wrong.

# **Preparation for using this extension**
1. Navigate your browser to `https://linkedin.com/learning/`
2. Login using individual or organization account
3. Search and Go to valid course page identified by url like `https://linkedin.com/learning/<YOUR_COURSE_NAME>` 
4. Click on the extension button on the top right of your browser then pin it
5. Once you had clicked button popup would shown
6. Try to explore and get experiance from clicking the buttons from the popup from left to right, so you should know whats going on?
7. Remember to set config before clicking button that contains download or direct link
8. if button seems not work, you must notice about the extension always redirect the course page with query string `https://<COURSE_URL>/?autoplay=false&resume=false` , sometimes chrome service workers gonna sleep and you need to waking up those by refreshing current page manually until you see thats query string.

`Note:` ~~Since this extension is still in development, if you are in the download stage please dont close the extension popup or the download process will be interupted.~~ fixed in v1.0.1

`Disclaimer:` This purpose of this project is just for educational process as part of the journey of the creator in the programming world, please use at your own responsibiity.


# Extensions development

Currently this extension development requirement are :

0. `nodejs >= v15` `Vue >= 3.0` , `esbuild`, a little `typescript`
1. `bash` shell
2. `ffplay` for playing sound on webpack
3. `curl` used for reloading extension
4. modified version from original [`chrome-stay-fresh`](https://github.com/ahw/chrome-stay-fresh) for auto reloading extension
5. advance knowledge about `shell`, `javascript`, `typescript`, `nodejs`, `vuejs`, `esbuild`, `chrome extension`



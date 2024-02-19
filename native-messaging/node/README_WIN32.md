### Build and Install on Windows 10+
Build will require Visual Studio 2022 and `nexe`
Run `build.bat` in current directory then run `install.bat`

```
E:\LLFetcher\native-mesaging\node>npm i -g nexe
E:\LLFetcher\native-mesaging\node>build.bat
E:\LLFetcher\native-mesaging\node>install.bat <browser_name> <extension_id>
E:\LLFetcher\native-mesaging\node>install.bat chrome  ncfdbofhgnoammldlfcfdkcldpbepjhc
E:\LLFetcher\native-mesaging\node>install.bat edge  ncfdbofhgnoammldlfcfdkcldpbepjhc
```

Then you can double click the `registry-entries.reg` file to add the registry entries.

### Enable download with aria2c
Please install [aria2c](https://aria2.github.io/) to enable download with `aria2c` then add the current binary to system path
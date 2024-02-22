# Developer Notes

This some trouble shooting that I have found during development process, sometime make things complicated and more sucks and tricky

## Common

### React Hook Component on mounted or `useEffect` called twice

Remove `<React.StrictMode>` from `main.js` where `React.createRoot` called

### Consider using `IndexedDB`

Use `IndexedDB` for persistent storage on the client side beause of it support for large data size instead of `chrome.storage.*` or old `localStorage` approximately max `10MB` serialized string value

### Cookies Sharing : `document.cookies` doesn't retrive all cookies

Accessing `document.cookies` from content script doesn't capture cookies with `httpOnly:true`. This cookie attribute for use only on every fetch request for saved cookie values on current domain request but you can't retrieve it's value for sharing purpose to be used in native messaging console app for ex: for making authenticated download process.

Workaround:

Use this API

```
chrome.cookies.getAll(
  details: object,
  callback?: function,
)

chrome.cookies.getAll({domain:'www.linkedin.com'},o=>console.log(o))
```

## Preline Framework related

### Preline Modal make focus tabIndex next focus order not in the right orders and disable Escape

Workaround:

I just rename `onTab` event handlers to `onTabOverride`, `onEscape` to `onEscapeOverride`, and store both in the `onTabDefault` and `onEscapeDefault` available on `patch/preline.js`

```
HSOverlay.onTabOverride = (t, e) => {
      HSOverlay.onTabDefault(t, e)
  //   console.log(e.onTabDefault)
}
HSOverlay.onEscapeOverride = (t) => {
  console.log(t)
  HSOverlay.onEscapeDefault(t)
}

```

after workaround found solution:

```
useEffetct(()=>{
  // disable multiple autoInit
  const $el = jQuery(`#basic-modal-upload-clicker`)
  if (!$el.prop("hasOverlay")) {
    $el.prop("hasOverlay", "yes")
    HSOverlay.autoInit()
  }
  return () => {
    try {
      document.querySelector("div[data-hs-overlay-backdrop-template]").remove()
    } catch (e) {}
  }
},[])
```

### Remove preline modal backdrop on component unmount

```
document.querySelector("div[data-hs-overlay-backdrop-template]").remove()

//Snippet hooks
const MyComponent = ()=>{
  useEffect( () => () => {
    try{
      document.querySelector("div[data-hs-overlay-backdrop-template]").remove()
    }catch(e){
      console.error(e)
    }
    console.log("unmount")
  }, [] )
}

// component based class
class MyComponent extends React.Component{
  componentWillUnmount(){
    try{
      document.querySelector("div[data-hs-overlay-backdrop-template]").remove()
    }catch(e){
      console.error(e)
    }
    console.log("unmount")
  }
}
```

## Native Messaging Host App related

### Chrome native-messaging host app closed unexpectedly

- check for `console.log` or `console.error` or `console.warn` or another direct write to stdout or stderr consider using log file for ex: using Bunyan Logger `logger.info`
- `max data size in and out` on native message is only 1MB consider use HTTP for larger data size
- `child_process.spawn`
- `child_process.exec` if run command that create another child process
- `uncontrollable async or await function` consider using `Promise.then().catch()` or `callback`

### Auto load module using `await import('modulePathName.js')`

- Sometimes error not on script or syntax error consider test first in console mode environment for ex:`src/api/test/*` i write test function here befor attaching to main native messaging host app scripts
- For manualy update can be using `?` after module path ex: `import mymodule from './mymodule.js?12345RandomValuesOrNewDateGetTimeToString'`

### Using child_process.exec

- quoted string arguments,ampersand characters sometimes make tricky test your string argument valid for desired value using `arg_test.cjs --header "cookie: bscookie=\"v=1&\""` bla - bla console log function must be `'cookie: bscookie="v=1&"'` sometimes different on WIN32 and UNIX

### WIN32 need EXE file but UNIX need +x file

- compiling nodejs app with nexe on win32 will need Visual Studio
- On ther os will need build environment for ex: `build-essential` on `ubuntu linux` or `xcode` on `mac` or you can use script file with `+x` attribute set

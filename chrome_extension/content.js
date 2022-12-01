(()=>{"use strict";function e(){const e=window.location.pathname.split("/").filter((e=>e)),t=location.search.substring(1);return{pathArray:e,queryStringObject:JSON.parse('{"'+t.replace(/&/g,'","').replace(/=/g,'":"')+'"}',(function(e,t){return""===e?t:decodeURIComponent(t)}))}}chrome.runtime.onMessage.addListener((function(t,o){if(console.log(t),void 0!==t.event)if("onHistoryStateUpdated"==t.event||"onTabUpdated"==t.event)(function(){const t=e().pathArray;let o=!1;return t.length>=2&&"learning"===t[0]&&"topics"!==t[1]&&"search"!==t[1]&&(o=!0),o})()&&(localStorage.activeUrl=t.url,chrome.storage.sync.set({activeUrl:t.url}),function(){const t=e(),o=t.pathArray,a=t.queryStringObject;let n=!1;void 0!==a.autoplay&&"true"==a.autoplay&&(a.autoplay="false",n=!0),void 0!==a.resume?"true"==a.resume&&(a.resume="false",n=!0):(a.resume="false",n=!0);let r=`/${o[0]}/${o[1]}`,s=0;for(let e in a)r+=0==s?"?":"&",r+=`${e}=${a[e]}`,s+=1;n&&(window.location.href=r)}());else if("sendCoookie"==t.event){const e=JSON.stringify(t.cookie);localStorage.activeCookie=e,chrome.storage.sync.set({activeCookie:e})}else if("SaveDataCodesToLS"==t.event){let e=document.getElementById("dataCodes");if(null!==e){let t=e.getAttribute("data");localStorage.dataCodes=t,chrome.storage.sync.set({dataCodes:t})}}else"ContentConsoleLog"==t.event&&console.log("Popup.log:",t.param)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoibUJBQUEsU0FBU0EsSUFDTCxNQUFNQyxFQUFhQyxPQUFPQyxTQUFTQyxTQUFTQyxNQUFNLEtBQUtDLFFBQU9DLEdBQVFBLElBQ2hFQyxFQUFVTCxTQUFTTSxPQUFPQyxVQUFVLEdBRTFDLE1BQU8sQ0FDSEMsVUFBV1YsRUFDWFcsa0JBSHVCQyxLQUFLQyxNQUFNLEtBQU9OLEVBQVFPLFFBQVEsS0FBTSxPQUFPQSxRQUFRLEtBQU0sT0FBUyxNQUFNLFNBQVVDLEVBQUtDLEdBQVMsTUFBZSxLQUFSRCxFQUFhQyxFQUFRQyxtQkFBbUJELEVBQVEsSUFLMUwsQ0NQQUUsT0FBT0MsUUFBUUMsVUFBVUMsYUFBWSxTQUFVQyxFQUFVQyxHQUVyRCxHQURBQyxRQUFRQyxJQUFJSCxRQUNpQixJQUFsQkEsRUFBU0ksTUFDaEIsR0FBc0IseUJBQWxCSixFQUFTSSxPQUFzRCxnQkFBbEJKLEVBQVNJLE9ES2xFLFdBQ0ksTUFDTWhCLEVBRGFYLElBQ1VXLFVBQzdCLElBQUlpQixHQUFrQixFQU10QixPQUxJakIsRUFBVWtCLFFBQVUsR0FDQyxhQUFqQmxCLEVBQVUsSUFBc0MsV0FBakJBLEVBQVUsSUFBb0MsV0FBakJBLEVBQVUsS0FDdEVpQixHQUFrQixHQUduQkEsQ0FDWCxFQ2RnQkUsS0FDQUMsYUFBd0IsVUFBSVIsRUFBU1MsSUFDckNiLE9BQU9jLFFBQVFDLEtBQUtDLElBQUksQ0FBRUMsVUFBV2IsRUFBU1MsTURvQjlELFdBQ0ksTUFBTUssRUFBYXJDLElBQ2JXLEVBQVkwQixFQUFXMUIsVUFDdkJDLEVBQW9CeUIsRUFBV3pCLGtCQUNyQyxJQUFJMEIsR0FBVyxPQUMwQixJQUE5QjFCLEVBQWtCMkIsVUFDUyxRQUE5QjNCLEVBQWtCMkIsV0FDbEIzQixFQUFrQjJCLFNBQVcsUUFDN0JELEdBQVcsUUFHb0IsSUFBNUIxQixFQUFrQjRCLE9BQ08sUUFBNUI1QixFQUFrQjRCLFNBQ2xCNUIsRUFBa0I0QixPQUFTLFFBQzNCRixHQUFXLElBSWYxQixFQUFrQjRCLE9BQVMsUUFDM0JGLEdBQVcsR0FFZixJQUFJRyxFQUFTLElBQUk5QixFQUFVLE1BQU1BLEVBQVUsS0FDdkMrQixFQUFRLEVBQ1osSUFBSyxJQUFJQyxLQUFLL0IsRUFFTjZCLEdBRFMsR0FBVEMsRUFDVSxJQUdBLElBRWRELEdBQVUsR0FBR0UsS0FBSy9CLEVBQWtCK0IsS0FDcENELEdBQVMsRUFFVEosSUFDQXBDLE9BQU9DLFNBQVN5QyxLQUFPSCxFQUUvQixDQ3ZEZ0JJLFNBR0gsR0FBc0IsZUFBbEJ0QixFQUFTSSxNQUF3QixDQUN0QyxNQUFNbUIsRUFBWWpDLEtBQUtrQyxVQUFVeEIsRUFBU3lCLFFBQzFDakIsYUFBMkIsYUFBSWUsRUFDL0IzQixPQUFPYyxRQUFRQyxLQUFLQyxJQUFJLENBQUVjLGFBQWNILEdBQzVDLE1BQ0ssR0FBc0IscUJBQWxCdkIsRUFBU0ksTUFBOEIsQ0FDNUMsSUFBSXVCLEVBQU9DLFNBQVNDLGVBQWUsYUFDbkMsR0FBYSxPQUFURixFQUFlLENBQ2YsSUFBSUcsRUFBVUgsRUFBS0ksYUFBYSxRQUNoQ3ZCLGFBQXdCLFVBQUlzQixFQUM1QmxDLE9BQU9jLFFBQVFDLEtBQUtDLElBQUksQ0FBRW9CLFVBQVdGLEdBQ3pDLENBQ0osS0FDMkIscUJBQWxCOUIsRUFBU0ksT0FDZEYsUUFBUUMsSUFBSSxhQUFjSCxFQUFTaUMsTUFHL0MsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2xsZmV0Y2hlci10cy8uL3NyYy9jb250ZW50X3NjcmlwdHMvZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbGxmZXRjaGVyLXRzLy4vc3JjL2NvbnRlbnRfc2NyaXB0cy9jb250ZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGV4dHJhY3RVcmwoKSB7XHJcbiAgICBjb25zdCBsUGF0aEFycmF5ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5maWx0ZXIoaXRlbSA9PiBpdGVtKTtcclxuICAgIGNvbnN0IGxTZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xyXG4gICAgY29uc3QgbFF1ZXJ5U3RyaW5nT2JqZWN0ID0gSlNPTi5wYXJzZSgne1wiJyArIGxTZWFyY2gucmVwbGFjZSgvJi9nLCAnXCIsXCInKS5yZXBsYWNlKC89L2csICdcIjpcIicpICsgJ1wifScsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7IHJldHVybiBrZXkgPT09IFwiXCIgPyB2YWx1ZSA6IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7IH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoQXJyYXk6IGxQYXRoQXJyYXksXHJcbiAgICAgICAgcXVlcnlTdHJpbmdPYmplY3Q6IGxRdWVyeVN0cmluZ09iamVjdFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc0NvdXJzZVBhZ2UoKSB7XHJcbiAgICBjb25zdCB1cmxFeHRyYWN0ID0gZXh0cmFjdFVybCgpO1xyXG4gICAgY29uc3QgcGF0aEFycmF5ID0gdXJsRXh0cmFjdC5wYXRoQXJyYXk7XHJcbiAgICBsZXQgdmFsaWRDb3Vyc2VQYWdlID0gZmFsc2U7XHJcbiAgICBpZiAocGF0aEFycmF5Lmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgaWYgKHBhdGhBcnJheVswXSA9PT0gJ2xlYXJuaW5nJyAmJiBwYXRoQXJyYXlbMV0gIT09ICd0b3BpY3MnICYmIHBhdGhBcnJheVsxXSAhPT0gJ3NlYXJjaCcpIHtcclxuICAgICAgICAgICAgdmFsaWRDb3Vyc2VQYWdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWRDb3Vyc2VQYWdlO1xyXG59XHJcbjtcclxuZnVuY3Rpb24gZ2V0Q291cnNlU2x1ZygpIHtcclxuICAgIGNvbnN0IHVybEV4dHJhY3QgPSBleHRyYWN0VXJsKCk7XHJcbiAgICBjb25zdCBwYXRoQXJyYXkgPSB1cmxFeHRyYWN0LnBhdGhBcnJheTtcclxuICAgIHJldHVybiBwYXRoQXJyYXlbMV07XHJcbn1cclxuO1xyXG5mdW5jdGlvbiByZWRpcmVjdE5vQXV0b1BsYXkoKSB7XHJcbiAgICBjb25zdCB1cmxFeHRyYWN0ID0gZXh0cmFjdFVybCgpO1xyXG4gICAgY29uc3QgcGF0aEFycmF5ID0gdXJsRXh0cmFjdC5wYXRoQXJyYXk7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZ09iamVjdCA9IHVybEV4dHJhY3QucXVlcnlTdHJpbmdPYmplY3Q7XHJcbiAgICBsZXQgcmVkaXJlY3QgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgcXVlcnlTdHJpbmdPYmplY3QuYXV0b3BsYXkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBpZiAocXVlcnlTdHJpbmdPYmplY3QuYXV0b3BsYXkgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nT2JqZWN0LmF1dG9wbGF5ID0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgcmVkaXJlY3QgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcXVlcnlTdHJpbmdPYmplY3QucmVzdW1lICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgaWYgKHF1ZXJ5U3RyaW5nT2JqZWN0LnJlc3VtZSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgcXVlcnlTdHJpbmdPYmplY3QucmVzdW1lID0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgcmVkaXJlY3QgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHF1ZXJ5U3RyaW5nT2JqZWN0LnJlc3VtZSA9ICdmYWxzZSc7XHJcbiAgICAgICAgcmVkaXJlY3QgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld1VybCA9IGAvJHtwYXRoQXJyYXlbMF19LyR7cGF0aEFycmF5WzFdfWA7XHJcbiAgICBsZXQgcXNJZHggPSAwO1xyXG4gICAgZm9yIChsZXQgayBpbiBxdWVyeVN0cmluZ09iamVjdCkge1xyXG4gICAgICAgIGlmIChxc0lkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ld1VybCArPSAnPyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdVcmwgKz0gJyYnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdVcmwgKz0gYCR7a309JHtxdWVyeVN0cmluZ09iamVjdFtrXX1gO1xyXG4gICAgICAgIHFzSWR4ICs9IDE7XHJcbiAgICB9XHJcbiAgICBpZiAocmVkaXJlY3QpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ld1VybDtcclxuICAgIH1cclxufVxyXG47XHJcbmZ1bmN0aW9uIGlzTG9nZWRJbigpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaVtkYXRhLWxpdmUtdGVzdC1tZS1tZW51XScpICE9PSBudWxsO1xyXG59XHJcbjtcclxuLy8gY29uc29sZS5sb2coYGlzIGNvdXJzZSBwYWdlIDogJHtpc0NvdXJzZVBhZ2UoKX1gKTtcclxuZXhwb3J0IHsgaXNDb3Vyc2VQYWdlLCByZWRpcmVjdE5vQXV0b1BsYXkgfTtcclxuIiwiaW1wb3J0IHsgaXNDb3Vyc2VQYWdlLCByZWRpcmVjdE5vQXV0b1BsYXkgfSBmcm9tICcuL2Z1bmN0aW9uJztcclxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXNwb25zZSwgc2VuZFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmV2ZW50ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmV2ZW50ID09ICdvbkhpc3RvcnlTdGF0ZVVwZGF0ZWQnIHx8IHJlc3BvbnNlLmV2ZW50ID09ICdvblRhYlVwZGF0ZWQnKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0NvdXJzZVBhZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlW1wiYWN0aXZlVXJsXCJdID0gcmVzcG9uc2UudXJsO1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBhY3RpdmVVcmw6IHJlc3BvbnNlLnVybCB9KTtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0Tm9BdXRvUGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLmV2ZW50ID09ICdzZW5kQ29vb2tpZScpIHtcclxuICAgICAgICAgICAgY29uc3QgY29va2llU3RyID0gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuY29va2llKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlWydhY3RpdmVDb29raWUnXSA9IGNvb2tpZVN0cjtcclxuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBhY3RpdmVDb29raWU6IGNvb2tpZVN0ciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmVzcG9uc2UuZXZlbnQgPT0gJ1NhdmVEYXRhQ29kZXNUb0xTJykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhQ29kZXMnKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhU3RyID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVtcImRhdGFDb2Rlc1wiXSA9IGRhdGFTdHI7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGRhdGFDb2RlczogZGF0YVN0ciB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5ldmVudCA9PSAnQ29udGVudENvbnNvbGVMb2cnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb3B1cC5sb2c6JywgcmVzcG9uc2UucGFyYW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJleHRyYWN0VXJsIiwibFBhdGhBcnJheSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImZpbHRlciIsIml0ZW0iLCJsU2VhcmNoIiwic2VhcmNoIiwic3Vic3RyaW5nIiwicGF0aEFycmF5IiwicXVlcnlTdHJpbmdPYmplY3QiLCJKU09OIiwicGFyc2UiLCJyZXBsYWNlIiwia2V5IiwidmFsdWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJyZXNwb25zZSIsInNlbmRSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsInZhbGlkQ291cnNlUGFnZSIsImxlbmd0aCIsImlzQ291cnNlUGFnZSIsImxvY2FsU3RvcmFnZSIsInVybCIsInN0b3JhZ2UiLCJzeW5jIiwic2V0IiwiYWN0aXZlVXJsIiwidXJsRXh0cmFjdCIsInJlZGlyZWN0IiwiYXV0b3BsYXkiLCJyZXN1bWUiLCJuZXdVcmwiLCJxc0lkeCIsImsiLCJocmVmIiwicmVkaXJlY3ROb0F1dG9QbGF5IiwiY29va2llU3RyIiwic3RyaW5naWZ5IiwiY29va2llIiwiYWN0aXZlQ29va2llIiwibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhU3RyIiwiZ2V0QXR0cmlidXRlIiwiZGF0YUNvZGVzIiwicGFyYW0iXSwic291cmNlUm9vdCI6IiJ9
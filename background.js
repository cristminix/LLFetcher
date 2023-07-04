chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.action === 'activateTab') {
        const url = request.url
      chrome.tabs.query({ url: `${chrome.runtime.getURL('options.html')}*`  }, function(tabs) {
        var activeTab = tabs[0];
        // Activate the tab
        chrome.tabs.update(activeTab.id, { active: true });
        // Change the URL
        chrome.tabs.update(activeTab.id, { url });
      });
    }
  });
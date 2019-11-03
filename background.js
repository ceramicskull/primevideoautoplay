// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  
});
var links;
var counter;
// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "update_tab" ) {
      window.counter = 0;
      window.links = request.urls;
      chrome.tabs.update({url: links[counter], highlighted: true});
      chrome.windows.getCurrent(function(window){
        chrome.windows.update(window.id, { state: "fullscreen" });
      });
      setTimeout(function(){ 
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              var activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, {"message": "hide_mouse"});
          });
       }, 3000);
      window.counter ++;
      
    }
    if( request.message === "update_tab_again" ) {
      if(counter < links.length){
      chrome.tabs.update({url: links[counter], highlighted: true});
      window.counter ++;
      }
      else{
        alert("season finished");
      }
    }
  }
);
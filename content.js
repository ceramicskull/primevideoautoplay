// content.js
var e;


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "watch_episode" ) {
      console.log("watch episode");
      e = parseInt(request.num)-1; 
      links = [];
      for(i = e; i < $("a[class^='_1HiwGB wogJkv js-deeplinkable']").length; i++){
      var str = $("a[class^='_1HiwGB wogJkv js-deeplinkable']").eq(i).attr("href").split("&t=");

	  links.push("https://www.primevideo.com" + str[0] + "&t=0");
	  }
	  chrome.runtime.sendMessage({"message": "update_tab", "urls": links});
    }
    if( request.message === "hide_mouse" ) {
    	console.log("mouse hidden");
    }
  });
$("body").on('DOMSubtreeModified', "div.time", function() {

    		if($("span.timeRemaining").text() == "/ 00:01"){
	  			chrome.runtime.sendMessage({"message": "update_tab_again"});
    		}		
		});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "hide_mouse" ) {
    	
    }
  });

window.onload=function(){
document.getElementById("myButton").addEventListener("click", watchEp);

function watchEp(){
	var x = document.getElementById("eps").value;
  
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "watch_episode", "num": x});
    window.close();
  });
  }
}
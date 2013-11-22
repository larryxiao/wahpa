function showtabs () {
  var tabsDiv = document.getElementById("tabs");
  chrome.tabs.query({highlighted: true}, function expo (tab) {
    for (index = 0; index < tab.length; ++index) {
        console.log(tab[index]);
        temp = tab[index];
        tabsDiv.innerHTML += "<p>["+temp.title+"]("+temp.url+")</p>";
    }
  })
}

function init () {
    document.getElementById("editor").onclick = function function_name (argument) {
      chrome.tabs.create({url:chrome.extension.getURL("editor.html")});
    };
    showtabs();
}
// Kick things off.
document.addEventListener('DOMContentLoaded', init);
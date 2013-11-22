function showtabsb () {
  var tabsDiv = document.getElementById("tabs-b");
  tabsDiv.innerHTML = "";
  chrome.tabs.query({}, function expo (tab) {
    for (index = 0; index < tab.length; ++index) {
        console.log(tab[index]);
        temp = tab[index];
        tabsDiv.innerHTML += "<p>["+temp.title+"]("+temp.url+")</p>";
    }
  })
}

function init () {
    document.getElementById("show").onclick = showtabsb;
}
// Kick things off.
document.addEventListener('DOMContentLoaded', init);
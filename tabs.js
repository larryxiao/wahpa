function showtabs () {
  var tabsDiv = document.getElementById("tabs");
  chrome.tabs.query({highlighted: true}, function expo (tab) {
    for (index = 0; index < tab.length; ++index) {
        console.log(tab[index]);
        temp = tab[index];
        tabsDiv.innerHTML = "<p>["+temp.title+"]("+temp.url+")</p>";
    }

  })

}
// Kick things off.
document.addEventListener('DOMContentLoaded', showtabs);

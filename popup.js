// [How to copy to clipboard in Chrome extensionPakzilla](http://wp.me/ptmKj-vb)
function copyToClipboard( text ){
        var copyDiv = document.createElement('div');
        copyDiv.contentEditable = true;
        document.body.appendChild(copyDiv);
        copyDiv.innerHTML = text;
        copyDiv.unselectable = "off";
        copyDiv.focus();
        document.execCommand('SelectAll');
        document.execCommand("Copy", false, null);
        document.body.removeChild(copyDiv);
      }


function showtabs () {
  var tabsDiv = document.getElementById("tabs");
  chrome.tabs.query({highlighted: true}, function expo (tab) {
    for (index = 0; index < tab.length; ++index) {
        console.log(tab[index]);
        temp = tab[index];
        // can't be hidden='true' to allow copy
        tabsDiv.innerHTML += "<div id='text'>["+temp.title+"]("+temp.url+")</div>";
        // copy the tab to clipboard
        // TODO understand javascript execution sequence
        // when the following is put outside for clause, can't find the object
        // EXP  use chrome developer tools to figure out
        // BUG  the query method return highlighted tab of each window, not the current one
        //Get Input Element
        // console.log(document.getElementById("text"));
        tabsDiv.contentEditable = true;
        tabsDiv.unselectable = "off";
        tabsDiv.focus();
        // document.getElementById("text").select();
        //Copy Content
        document.execCommand('SelectAll');
        document.execCommand("Copy", false, null);
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
// raw html part
// mixed with jquery ... it's indeed handy
function showtabsb () {
  var tabsDiv = document.getElementById("container");
  tabsDiv.innerHTML = "";
  chrome.tabs.query({}, function expo (tab) {
    $('#container').append(
      "<ul id='Unsorted' class='sortable'><h3 class='list-heading'>### Unsorted</h3></ul>"
      );
    for (index = 0; index < tab.length; ++index) {
      console.log(tab[index].title);
      $('#Unsorted').append(
        "<li> * ["+tab[index].title+"]("+tab[index].url+")</li>"
        );
    }
  })
}

// raw html part
function init () {
  document.getElementById("show").onclick = showtabsb;
}
// Kick things off.
document.addEventListener('DOMContentLoaded', init);

// jquery
function driver () {
  $(".sortable").sortable({
    receive: function (event, ui) {
      ui.item.remove();
    }
  });

  $(".sortable li").draggable({
    connectToSortable: ".sortable",
    helper: "clone",
    revert: "invalid"
  });
}

$(function(){
  driver();
  $("#addtag").click(function(){
    // alert('clicked!');
    var person=prompt("Please enter your tag","WAHPA!");
    $('#container').append(
      "<ul class='sortable'><h3 class='list-heading'>### "+person+"</h3></ul>"
      );
    driver();
  });
  $("#output").click(function() {
    var output = "";
    $( "ul" ).children().each(function( index, elem ) {
      output += $( this ).text() + "<br>";
      console.log( $( this ).text() );
    });
    var w = window.open();
    $(w.document.body).html(output);
  })
});
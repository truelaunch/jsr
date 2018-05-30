/* Independent Practice

Making a list: jQuery


You'll add the ability to complete the you gotta be's in your lyrics list:

- Using jQuery, add a "complete" link at the end of each to-do item (i.e. each "gotta-be")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete" link at the end

*/

var $list = $("#gotta-be-list");

//get button clicked
$('#new-thing-button').on('click', function(e) {
  e.preventDefault();
  var $thing = $("#new-thing").val();
  addToList($list, $thing);
});

function addToList($list, thing) {
  var $thingLi = $('<li>').text(thing);
  $list.append($thingLi);
  addCompleteLinks($thingLi);
}

function addCompleteLinks(thing) {
  var $completeLink = $('<a href="#">').text(" Complete!");
  thing.append($completeLink);

  // click the complete link
  $completeLink.on('click', function(e) {
    e.preventDefault();
    thing.addClass("strikethrough");
  });
}

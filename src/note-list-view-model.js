(function (exports) {


function noteListView(notelist) {
  this.notelist = notelist
};

noteListView.prototype.noteListModel = function () {
 var listarray = this.notelist.getNotes();

 console.log("<ul>")
  for (var i = 0; i < listarray.length; i++) {
     console.log("<li>" + listarray[i].text +"</li>");
   };
 console.log("</ul>")
};
  exports.noteListView = noteListView;
})(this);

(function (exports) {

function noteListView(notelist) {
  this.notelist = notelist
};

noteListView.prototype.returnArrayAsHtml = function () {
 var listarray = this.notelist.getNotes();
 var html;
 html = "<ul>";

listarray.forEach(function(listarray){ html += "<li>" + listarray.text.substring(0,20) +"</li>" })
  html += "</ul>";
  return html;
};
  exports.noteListView = noteListView;
})(this);

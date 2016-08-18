(function (exports) {


function noteListView(notelist) {
  this.notelist = notelist

};

noteListView.prototype.returnArrayAsHtml = function () {
 var listarray = this.notelist.getNotes();
 var html;
 if (listarray.length !== 0) {
  html = "<ul>";
    for (var i = 0; i < listarray.length; i++) {
      html += "<li>" + listarray[i].text +"</li>";
    };
  html += "</ul>";
  return html };
};
  exports.noteListView = noteListView;
})(this);

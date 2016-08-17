(function (exports) {


function noteListView(notelist) {
  this.notelist = notelist
};

noteListView.prototype.noteListModel = function () {
 var listarray = this.notelist.getNotes;
 var arrayLength = listarray.length;


  for (var i = 0; i < arrayLength; i++) {
     console.log("<li>" + listarray[i].text +"</li>");
   };


};
  exports.noteListView = noteListView;
})(this);

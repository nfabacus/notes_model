 //
 // ;element = document.getElementById("app")
 // element.innerHTML = "howdy!"
 // console.log(element);

(function(exports) {

   function NoteController(notelist) {
    this.notelistview = new noteListView(notelist);
    console.log(this.notelistview);
  };

  NoteController.prototype.writeNotesListInToHtml = function () {
    var element = document.getElementById("app")

    element.innerHTML = this.notelistview.returnArrayAsHtml();
  };
  exports.NoteController = NoteController;
})(this);

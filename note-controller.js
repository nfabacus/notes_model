 //
 // ;element = document.getElementById("app")
 // element.innerHTML = "howdy!"
 // console.log(element);

(function(exports) {
//
   function NoteController(notelist) {
    // notelist.createNote("");
    this.notelistview = new noteListView(notelist);
  };

    NoteController.prototype.insertHTML = function() {
      var element = document.getElementById("app");
      element.innerHTML = this.getListView().returnArrayAsHtml();
    };
    NoteController.prototype.getListView = function() {
      return this.notelistview;
    };
//
//   NoteController.prototype.getHtmlTag = function () {
//     return document.getElementById("app")
//     console.log(element, 1);
//   };
// //
//   NoteController.prototype.writeNotesListInToHtml = function () {
//    this.notelistview.returnArrayAsHtml().innerHTML;
//   };
  exports.NoteController = NoteController;
})(this);

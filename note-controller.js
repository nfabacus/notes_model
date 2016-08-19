(function(exports) {
//
   function NoteController(notelist) {
    this.notelistview = new noteListView(notelist);
  };

    NoteController.prototype.insertHTML = function() {
      var element = document.getElementById("app");
      element.innerHTML = this.getListView().returnArrayAsHtml();
    };
    NoteController.prototype.getListView = function() {
      return this.notelistview;
    };

  exports.NoteController = NoteController;
})(this);

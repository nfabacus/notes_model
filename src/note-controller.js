(function(exports) {

  function NoteController(text){
    var list = new NoteList();
    list.addNote(text);
    this.noteListView = new NoteListView(list.displayList());
  }

  NoteController.prototype.insertHTML = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.outputWeb();
  };

  exports.NoteController = NoteController;
})(this);

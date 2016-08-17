(function(exports) {

  function NoteController(note) {
    var noteList = new NoteList();
    noteList.addNote(note); //it creates note object with this string.
    this.noteListView = new NoteListView(noteList.viewNotes()); //.viewNotes returns notes objects.
  }
  NoteController.prototype.outputHtml = function() {
      var element = document.getElementById("app");
      element.innerHTML = this.noteListView.html();
  }


  exports.NoteController = NoteController;

})(this);

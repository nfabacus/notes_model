(function(exports) {

  function NoteController() {
    var noteList = new NoteList();
    noteList.addNote("Favourite drink: seltzer"); //it creates note object with this string.
    this.noteListView = new NoteListView(noteList.viewNotes()); //.viewNotes returns notes objects.
  }
  NoteController.prototype.outputHtml = function() {
      var element = document.getElementById("app");
      element.innerHTML = this.noteListView.html();
  }


  exports.NoteController = NoteController;

})(this);

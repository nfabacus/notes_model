(function(exports) {

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype = {
    viewNotes: function() {
      return this.list;
    },
    addNote: function(textNote) {
      this.list.push(new Note(textNote));
    }
  }

  exports.NoteList = NoteList;

})(this);

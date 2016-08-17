(function (exports) {

  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.getNotes = function () {
    return this.notes
  };

  NoteList.prototype.storeNote = function (note) {
     this.notes.push(note)
  };

})(this);

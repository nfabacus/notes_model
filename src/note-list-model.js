(function (exports) {

  function NoteList() {
    this.notes = [];
    this.counter = 0;
  };

  NoteList.prototype.getNotes = function () {
    return this.notes;
  };

  NoteList.prototype.storeNote = function (note) {
    this.notes.push(note);
  };

  NoteList.prototype.createNote = function (text) {
    this.storeNote(new Note(text, this.counter));
    this.counter++;
  };
  exports.NoteList = NoteList;

})(this);

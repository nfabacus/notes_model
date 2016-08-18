(function(exports){

  function noteList(){
    this.notes = [];
    this.counter = 0;

  noteList.prototype.createNote = function(text) {
    note = new Note(text, this.counter);
    this.notes.push(note);
    this.counter +=1;
  };

  noteList.prototype.getAllNotes = function () {
    return this.notes;
  };

  }
  exports.noteList = noteList;

})(this);

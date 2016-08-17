(function(exports){

  function NoteList(){
    this.notes = [];
  }
  NoteList.prototype.displayList = function(){
    console.log("display the list");
    return this.notes;
  };

  NoteList.prototype.addNote = function(note){
    this.notes.push(new Note(note));
    console.log("Note added!");
  }

  exports.NoteList = NoteList;

})(this);

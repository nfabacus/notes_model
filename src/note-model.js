(function(exports) {

  function Note(string){
    this.text = string;
  }

  Note.prototype.NoteCanStoreText = function(){
    console.log("note can store text");
    return this.text;
  };

exports.Note = Note;
})(this);

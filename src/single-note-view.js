(function(exports){

  function SingleNoteView(note){
    this.note = note;
  }
  SingleNoteView.prototype.writeHTML = function(){
    var string ="<div>"+this.note.NoteCanStoreText()+"</div>";
    return string;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);

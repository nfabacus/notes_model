(function(exports){
  function SingleNoteView(note){
    this.note = note;
  }
  SingleNoteView.prototype.outputHTML = function(){
    var string = "<div>" + this.note.text + "</div>";
    return string;
  }

  exports.SingleNoteView = SingleNoteView;

})(this);

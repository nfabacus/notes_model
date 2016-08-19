(function(exports){
  function SingleNoteView(note){
    this.note = note;
  }
  SingleNoteView.prototype.outputHTML = function(){
    var string ="";
    if(typeof this.note !== "undefined"){
      string = "<div>" + this.note.text + "</div>";

    } else {
      alert("Cannot find a note with this #id.");
      string = "<div></div>";
    }
    return string;
  }
  exports.SingleNoteView = SingleNoteView;

})(this);

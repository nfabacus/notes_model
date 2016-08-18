(function (exports) {

  function NoteView(note) {
    this.note = note;
};

  NoteView.prototype.show = function() {
    return "<div>" + this.note.text + "</div>";
  };

  exports.NoteView = NoteView;
})(this);

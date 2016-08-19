(function (exports) {

  function Note(text, counter) {
    this.text = text;
    this.id = counter;
  };

  Note.prototype.getText = function() {
    return this.text;
  };

    exports.Note = Note;
})(this);

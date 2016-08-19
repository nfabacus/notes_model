(function(exports){
  var ListModel;
  var self;

  function NoteController(listMod){
    self = this;
    this.view = new ListView(listMod);
    ListModel = listMod;
  }
  NoteController.prototype.displayListInPage = function() {
    if (ListModel.notes.length > 0) {
      document.getElementById("app").innerHTML = this.view.turnIntoHtml();
    }
  };

  NoteController.prototype.ListenToHashChangeToDisplaySingleNote = function(){
    window.addEventListener("hashchange", this.displayWholeSingleNoteInPage);
  };

  NoteController.prototype.displayWholeSingleNoteInPage = function () {
    var id = window.location.hash.split("#")[1];
    if (typeof id !== "undefined"){
      var singleNoteView = new SingleNoteView(ListModel.notes[id]);
      var singleNoteHTML = singleNoteView.outputHTML();
      document.getElementById("app2").innerHTML = singleNoteHTML;
    }
  };

  NoteController.prototype.listenToFormSubmission = function(){
    var form = document.getElementById("note-form");

    form.addEventListener('submit', function(e){
      e.preventDefault();
      console.log("form submitted!");
      ListModel.createNote(e.target[0].value);
      console.log("ListModel:", ListModel.notes);
      self.displayListInPage();
    });

  };

  NoteController.prototype.displayWholePage = function(){
    this.displayListInPage();
    this.displayWholeSingleNoteInPage();
    this.ListenToHashChangeToDisplaySingleNote();
    this.listenToFormSubmission();
  };


exports.NoteController = NoteController;

})(this);

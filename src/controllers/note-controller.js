// Takes a note list model upon instantiation.
// Adds a note that says Favourite drink: seltzer.
// (You could create another file, index.js, to instantiate the NoteController from.)
// Sets up a note list view with the note list model passed in.
// Has a method that gets HTML from the note list view
// and inserts it into the app element.
//


(function(exports){

  function noteController(list){
    this.view = new ListView(list);
  
      noteController.prototype.addToIndex = function() {
        document.getElementById("app").innerHTML =
          this.view.turnIntoHtml();
      };
  }
exports.noteController = noteController;
//
}) (this);

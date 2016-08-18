function testSingleNoteView() {
  var note = new Note("Hello, world!");
  var singleNoteView = new SingleNoteView(note);
  if (singleNoteView.note === note) {
    console.log("SingleNoteView takes a note model. Passed.");
  } else {
    console.log("SingleNoteView takes a note model. Failed.");
  }
  var htmlString = singleNoteView.outputHTML();
  if (htmlString === "<div>Hello, world!</div>") {
    console.log("outputHTML method worked!");
  } else {
    console.log("outputHTML method did not work...");
  }
}



testSingleNoteView();

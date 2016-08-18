function testNoteView() {
  var note = new Note("goodbye")
  var noteview= new NoteView(note);
  noteview.show();
  if (noteview.show() === "<div>goodbye</div>") {
  console.log("This has passed");
  } else {
  console.log("This has not passed");
 }
};
  testNoteView();

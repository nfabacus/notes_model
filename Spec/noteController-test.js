function testNoteController() {
  var notelist = new NoteList;
  notelist.createNote("Seltzzerr");
  var notecontroller = new NoteController(notelist);
  notecontroller.writeNotesListInToHtml();
  console.log(element);
  console.log("here");
  var element = document.getElementById("app");

  if (notecontroller.writeNotesListInToHtml() === element) {
    console.log("testNoteController: This has passed")
  } else {
    console.log("testNoteController: This has failed")
  }
};
testNoteController();

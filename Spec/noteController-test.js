function testNoteController() {
  var notelist = new NoteList;
//   console.log(1);
  notelist.createNote("Favorite Drink: Seltzer");
//   console.log(2);
  var notecontroller = new NoteController(notelist);
//   console.log(3);
  notecontroller.insertHTML();
//   console.log(notecontroller.writeNotesListInToHtml());
//   console.log(4);
  var element = document.getElementById("app");
//   console.log(5);
//   console.log(element);
  if (element.innerHTML === "<ul><li>Favorite Drink: Seltzer</li></ul>") {
    console.log("testNoteController: This has passed");
  } else {
    console.log("testNoteController: This has failed");
  }
};
testNoteController();

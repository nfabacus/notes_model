function testNoteController() {
  var notelist = new NoteList;
  notelist.createNote("Favorite Drink: Seltzer");
  var notecontroller = new NoteController(notelist);

  notecontroller.insertHTML();

  var element = document.getElementById("app");

  if (element.innerHTML === '<ul><li><a href="#0">Favorite Drink: Selt</a></li></ul>') {
    console.log("testNoteController: This has passed");
  } else {
    console.log("testNoteController: This has failed");
  }
};
testNoteController();

function testNoteController () {
  noteController = new NoteController("Hello, World!");
  noteController.insertHTML();
  var outputStr = document.getElementById("app").innerHTML;
  console.log("THIS IS MY HTML:", outputStr);
  if (outputStr === "<ul><li><div>Hello, World!</div></li></ul>"){
    console.log("Note displayed in the html page.");
  }
  else {
    console.log("Note is not displayed in the html page.");
  }
}

testNoteController();

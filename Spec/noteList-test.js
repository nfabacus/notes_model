function testViewNoteList() {
 var list = new NoteList();

 list.createNote("this is note1")

 if (list.getNotes()[0].text === "this is note1" ) {
   console.log("viewNoteList: This has passed");
 } else {
   console.log("testViewNoteList: This has not passed");
  }
};
testViewNoteList();

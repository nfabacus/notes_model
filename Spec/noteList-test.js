function viewNoteList() {
 var list = new NoteList();

 list.createNote("this is note1")

 if (list.getNotes()[0].text === "this is note1" ) {
   console.log("This has passed");
 } else {
   console.log("This has not passed");
  }
};
viewNoteList();

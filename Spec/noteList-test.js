function viewNoteList() {
 var list = new NoteList();
 var totalList = list.getNotes();

 list.storeNote("this will work")
 if (totalList === ["this will work"]) {
   console.log("This has passed");
 } else {
   console.log("This has not passed");
  }
};
viewNoteList();

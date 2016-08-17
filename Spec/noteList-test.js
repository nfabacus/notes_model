function viewNoteList() {
 var list = new NoteList();
 var totalList = list.getNotes();
 var note1 = new Note("this is note1")

 list.createNote('this is a test note')
 if (list.getNotes()[0].text === 'this is a test note') {
   console.log("This has passed");
 } else {
   console.log("This has not passed");
  }
};
viewNoteList();

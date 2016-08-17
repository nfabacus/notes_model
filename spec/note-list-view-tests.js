function testNoteListView(){
  var list = new NoteList();
  list.addNote("I am Alwin.");
  list.addNote("I am Noby.");
  var noteListView = new NoteListView(list.displayList());
  var webString = noteListView.outputWeb();
  if (webString === "<ul><li><div>I am Alwin.</div></li><li><div>I am Noby.</div></li></ul>"){
    console.log("notes were successfully converted into a html string.");
  }
  else {
    console.log("notes did not convert into a html string properly.");
  }
}
testNoteListView();

function testNoNoteListView(){
  var list = new NoteList();
  var noteListView = new NoteListView(list.displayList());
  var webString = noteListView.outputWeb();
  if (webString === ""){
    console.log("no note. Pass.");
  }
  else {
    console.log("Something is returned.");
  }
}
testNoNoteListView();

var myNote = "my name is Noby.";

console.log("Note:");
var note = new Note(myNote);
if (note.viewNote() === myNote) {
  console.log("Test passes. Note can take input and output the same value.");
} else {
  console.log("Test fails. Note does not take input and output the same value.");
}

console.log("NoteList:");
console.log("Adding a note to the notelist.");
var list = new NoteList();
list.addNote(myNote);
if (list.list[0].note === myNote) {
  console.log("Test passes.  Note object was successfully added to the notelist.");
} else {
  console.log("Test fails.  Note object was not added to the notelist.");
}

console.log("Adding a multiple notes to the notelist.");
list.addNote(myNote);
list.addNote(myNote);
list.addNote(myNote);
if (list.viewNotes().length === 4) {
  console.log("Test passes.  Multiple note objects were successfully added to the notelist.");
} else {
    console.log("Test fails.  Multiple note objects were not added to the notelist.");
}

console.log("NoteListView:");
var list = new NoteList();
list.addNote("I am Ben.");
list.addNote("I am a coder.");
var listView = new NoteListView(list.viewNotes());
console.log("NoteListView is successfully instantiated.");
var htmlStr = listView.html();
if (htmlStr === "<ul><li><div>I am Ben.</div></li><li><div>I am a coder.</div></li></ul>"){
  console.log("Test passes. notelistview.html successfuly adds html tags to notes and return one string.");
} else {
  console.log("Test fails. notelistview.html failed to add html tags to notes and did not return it correctly.");
}

var list = new NoteList();
var listView = new NoteListView(list.viewNotes());
var htmlStr = listView.html();
if (htmlStr === ""){
  console.log(true);
} else {
  console.log(false);
}

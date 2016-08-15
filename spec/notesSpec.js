var myNote = "my name is Noby.";
var note = new Note(myNote);
if (note.viewNote() === myNote) {
  console.log(true);
}

var list = new NoteList();
list.addNote(myNote);
if (list.list[0].note === myNote) {
  console.log(true);
} else {
  console.log(false);
}

list.addNote(myNote);
list.addNote(myNote);
list.addNote(myNote);
if (list.viewNotes().length === 4) {
  console.log(true);
} else {
  console.log(false);
}


var list = new NoteList();
list.addNote("I am Ben.");
list.addNote("I am a coder.");
var listView = new NoteListView(list.viewNotes());
var htmlStr = listView.html();
if (htmlStr === "<ul><li><div>I am Ben.</div></li><li><div>I am a coder.</div></li></ul>"){
  console.log(true);
} else {
  console.log(false);
}

var list = new NoteList();
var listView = new NoteListView(list.viewNotes());
var htmlStr = listView.html();
if (htmlStr === ""){
  console.log(true);
} else {
  console.log(false);
}

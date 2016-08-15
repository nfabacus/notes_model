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

var view = new NoteView(list);

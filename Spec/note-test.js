function testNoteWorking () {
 var note = new Note('Hello');

  if (note.getText() !== 'Hello') {
    return console.log('testNoteWorking: This test has failed');
  } else {
    console.log('testNoteWorking: This test has passed');
  }
};

function testNoteId() {
  var noteList = new NoteList();
  noteList.createNote('Hello');
  noteList.createNote('Hello2');

  if (noteList.getNotes()[0].id === 0 && noteList.getNotes()[1].id === 1) {
    console.log("Note id matches. This test has passed.");
  } else {
    console.log("Note id does not match. This test has failed.");
  }

}


testNoteWorking();
testNoteId();

// 1. Stores an array of note models.this.notes = []

//2. Has a method that will return all the note models stored in the array.

// 3. Has a method that creates a new note model
// and stores it. This function
// takes the text of a note as an argument.

function testHasArrayOfNotes (){
  var list = new noteList();
  if (list.notes.length === 0) {
    console.log("testHasArrayOfNotes: passed");
  }
  else {
    console.log("testHasArrayOfNotes: failed");
  }
}

function testReturnsArrayofNotes (){
  var list = new noteList();
  list.createNote('text');
  if (list.getAllNotes()[0].text === "text") {
    console.log("testReturnsArrayofNotes: passed");
  }
  else {
    console.log("testReturnsArrayofNotes:failed");
  }
}

function testCreateNote(){
  var list = new noteList();
  list.createNote('text');
  if (list.notes.length === 1) {
    console.log("testCreateNote: passed");
  }
  else {
    console.log("testCreateNote: failed");
  }
}

function testNoteHasUniqueID() {
  var list = new noteList();
  list.createNote('Here is my note.');
  list.createNote('This is my note.');
  if (list.notes[1].id === 1) {
    console.log("note id was created. Passed.");
  } else {
    console.log("note id was not created. Failed.");
  }
}


testHasArrayOfNotes();
testCreateNote();
testReturnsArrayofNotes();
testNoteHasUniqueID();

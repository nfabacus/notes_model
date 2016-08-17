
function testNoteWorking () {
 var note = new Note('Hello');
  if (note.getText() !== 'Hello') {
    throw new Error ('This test has failed');
  } else { console.log('This test has passed');
  };
};
testNoteWorking();

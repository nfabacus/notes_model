function testNoteWorking () {
 var note = new Note('Hello');

  if (note.getText() !== 'Hello') {
    return console.log('testNoteWorking: This test has failed');
  } else {
    console.log('testNoteWorking: This test has passed');
  };
};
testNoteWorking();

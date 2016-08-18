function testNoteListViewMultiple() {
  var notelist = new NoteList;
  notelist.createNote("note 1 text");
  notelist.createNote("note 2 text");
  notelist.createNote("note 3 text");
  var notelistview = new noteListView(notelist);

  if (notelistview.returnArrayAsHtml() === "<ul><li>note 1 text</li><li>note 2 text</li><li>note 3 text</li></ul>") {
    console.log("testNoteListViewMultiple: This has passed");
  } else {
    console.log("testNoteListViewMultiple: This has failed");
   }
 };

 function testNoteListViewEmpty() {
   var notelist = new NoteList;
   var notelistview = new noteListView(notelist);

   if (notelistview.returnArrayAsHtml() === undefined) {
     console.log("testNoteListViewEmpty: This has passed");
   } else {
     console.log("testNoteListViewEmpty: This has failed");
     console.log(notelistview.returnArrayAsHtml());
    }
  };

testNoteListViewMultiple();
testNoteListViewEmpty();

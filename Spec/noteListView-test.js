function testNoteListViewMultiple() {
  var notelist = new NoteList();
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
   var notelist = new NoteList();
   var notelistview = new noteListView(notelist);

   if (notelistview.returnArrayAsHtml() === "<ul></ul>") {
     console.log("testNoteListViewEmpty: This has passed");
   } else {
     console.log("testNoteListViewEmpty: This has failed");
     console.log(notelistview.returnArrayAsHtml());
    }
  };

  function testReturnArrayAsHtml() {
    var notelist = new NoteList();
    notelist.createNote("note 1 text is longer than 20 characters not by choice");
    notelist.createNote("2 text is shorter");
    notelist.createNote("note 3 text also longer than 20 characters not by choice");
    var notelistview = new noteListView(notelist);

    if (notelistview.returnArrayAsHtml() === "<ul><li>note 1 text is longe</li><li>2 text is shorter</li><li>note 3 text also lon</li></ul>") {
      console.log("testReturnArrayAsHtml: This test has passed")
    } else {
      console.log("testReturnArrayAsHtml: This test has failed")
    }

  }

testNoteListViewMultiple();
testNoteListViewEmpty();
testReturnArrayAsHtml();

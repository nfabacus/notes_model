function testNoteListViewMultiple() {
  var notelist = new NoteList();
  notelist.createNote("note 1 text");
  notelist.createNote("note 2 text");
  notelist.createNote("note 3 text");
  var notelistview = new noteListView(notelist);

  if (notelistview.returnArrayAsHtml() === "<ul><li><a href=#0>note 1 text</a></li><li><a href=#1>note 2 text</a></li><li><a href=#2>note 3 text</a></li></ul>") {
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

    if (notelistview.returnArrayAsHtml() === "<ul><li><a href=#0>note 1 text is longe</a></li><li><a href=#1>2 text is shorter</a></li><li><a href=#2>note 3 text also lon</a></li></ul>") {
      console.log("testReturnArrayAsHtml: This test has passed")
    } else {
      console.log("testReturnArrayAsHtml: This test has failed")
    }
  }


  function testNoteLink() {
    var notelist = new NoteList();
    notelist.createNote("note 1 text is longer than 20 characters not by choice");
    notelist.createNote("2 text is shorter");
    notelist.createNote("note 3 text also longer than 20 characters not by choice");
    var notelistview = new noteListView(notelist);
    if (notelistview.returnArrayAsHtml() === '<ul><li><a href=#0>note 1 text is longe</a></li><li><a href=#1>2 text is shorter</a></li><li><a href=#2>note 3 text also lon</a></li></ul>') {
      console.log("testReturnArrayAsHtml display links: This test has passed");
    } else {
      console.log("testReturnArrayAsHtml does not display links: This test has failed");
    }
  }

testNoteListViewMultiple();
testNoteListViewEmpty();
testReturnArrayAsHtml();
testNoteLink();

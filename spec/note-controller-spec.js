
// When the method that puts the note list HTML
// into the index.html page is called,
// the app element has its innerHTML property
// set to the HTML for a note list with one note.


function testNoteController(){
  // var list = new noteList();
  // list.createNote("testing testing 123");
  var lists;
  var controller = new noteController(lists);
  if (controller !== null) {
    console.log("note controller can be instantiated: passed");
  }
  else {
    console.log("note controller can be instantiated: failed");
  }
}

function testNoteController_2(){
  var list = new noteList();

  list.createNote("testing testing 123");

  var controller = new noteController(list);
  controller.addToIndex();

  if (document.getElementById("app").innerHTML ===
 "<ul><li><div>testing testing 123</div></li></ul>") {
    console.log("controller.addToIndex method: passed");
  }
  else {
    console.log("controller.addToIndex method: failed");
  }
}



testNoteController();
testNoteController_2();

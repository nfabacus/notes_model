// Using TDD, update your note-controller.js to load content for the single note page. The note controller code should listen for hashchange events. When one happens, if the new browser URL is for a single note page, it should use the app element to set the web page content to the HTML for that note.
//  Go to http://localhost:8080 in your browser. You should be able to click on a note and see the full text of that note. There should be no page refresh.


function testNoteController(){
  // var list = new noteList();
  // list.createNote("testing testing 123");
  var lists;
  var controller = new NoteController(lists);
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

  var controller = new NoteController(list);
  controller.displayListInPage();

console.log(document.getElementById("app").innerHTML);
  if (document.getElementById("app").innerHTML ===
 '<ul><li><div><a href="#0">testing testing 123</a></div></li></ul>') {
    console.log("controller.displayListInPage method: passed");
  }
  else {
    console.log("controller.displayListInPage method: failed");
  }
}

function testNoteController_3 () {
  var list = new noteList();
  list.createNote("testing testing 123 hello world cool");
  var controller = new NoteController(list);
  // window.location.ha="0";
  //   var id = window.location.hash.split("#")[1];
  // var id = 0;
  controller.displayListInPage();
  controller.ListenToHashChangeToDisplaySingleNote();
  window.addEventListener("hashchange", checkContent);

  function checkContent(){
    var displayStr = document.getElementById("app2").innerHTML;
    console.log("displayStr", displayStr);
    if (displayStr === '<div>testing testing 123 hello world cool</div>') {
      console.log("loading content. Passed.");
    } else {
      console.log("loading content. Failed.");
    }

  }



}

testNoteController();
testNoteController_2();
testNoteController_3();

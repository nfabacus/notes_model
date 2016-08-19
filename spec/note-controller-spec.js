function testNoteController(){
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

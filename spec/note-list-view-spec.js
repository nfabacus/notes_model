//1. Code in a file called note-list-view.js.

//2. Takes a note list model upon instantiation.

//3. Has a method that, when called, returns a string of HTML that represents the note list model.
// For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
//4. Handles a note list model that has no notes, one note or several notes.
function testListView_one() {
  var list = new noteList();
  list.createNote("Hello Nobuyuki Fujioka Hello Nobuyuki Fujioka");
  list.createNote("Hello Nobuyuki Fujioka Hello Nobuyuki Fujioka");
  var listView = new ListView(list);
  if (listView.turnIntoHtml() ===
   "<ul><li><div>Hello Nobuyuki Fujio</div></li><li><div>Hello Nobuyuki Fujio</div></li></ul>" ) {
    console.log("testListView:creates an HTML string of 20c: passed");
  }
  else {
    console.log("testListView:creates an HTML string of 20c: failed");
  }
}

function testListView_two(){
  var list = new noteList();
  var listView = new ListView(list);
  if (listView.turnIntoHtml() === '<ul></ul>') {
    console.log("testListView: works for empty lists: passed");
  }
  else {
    console.log("testListView: works for empty lists: failed");
  }

}


testListView_one();
testListView_two();

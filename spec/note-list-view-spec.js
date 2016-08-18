
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

function testListView_three(){
  var list = new noteList();
  list.createNote("Hello Nobuyuki Fujioka Hello Nobuyuki Fujioka");
  var listView = new ListView(list);
  if (listView.turnIntoHtml() ===
"<ul><li><div><a href=#0>Hello Nobuyuki Fujio</a></div></li></ul>" ) {
    console.log("testListView: adds a href tag: passed");
  }
  else {
    console.log("testListView: adds a href tag: failed");
  }

}


testListView_one();
testListView_two();
testListView_three();

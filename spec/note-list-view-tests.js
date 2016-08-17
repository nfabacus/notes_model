function testNoteListView(){
  var list = new NoteList();
  list.addNote("I am Alwin.");
  list.addNote("I am Noby.");
  var noteListView = new NoteListView(list.displayList());
  var webString = noteListView.outputWeb();
  if (webString === "<ul><li><div>I am Alwin.</div></li><li><div>I am Noby.</div></li></ul>"){
    console.log("notes were successfully converted into a html string.");
  }
  else {
    console.log("notes did not convert into a html string properly.");
  }
}
testNoteListView();

function testNoNoteListView(){
  var list = new NoteList();
  var noteListView = new NoteListView(list.displayList());
  var webString = noteListView.outputWeb();
  if (webString === ""){
    console.log("no note. Pass.");
  }
  else {
    console.log("Something is returned.");
  }
}
testNoNoteListView();

function testNoteTwentyView(){
  var list = new NoteList();
  text1 = "Mixtape chambray fixie williamsburg food truck tattooed.";
  text2 = "Whatever tumblr Austin, scenester etsy pitchfork williamsburg wayfarers.";
  shortText1 = text1.substring(0,20);
  shortText2 = text2.substring(0,20);

  list.addNote(text1);
  list.addNote(text2);
  var noteListView = new NoteListView(list.displayList());
  var webString = noteListView.outputWeb();
  if (webString === "<ul><li><div>"+shortText1+"</div></li><li><div>"+shortText2+"</div></li></ul>"){
    console.log("notes were successfully cropped to 20 characters each and converted into a html string.");
  }
  else {
    console.log("notes were not cropped to 20 characters each with html tags.");
  }
}
testNoteTwentyView();

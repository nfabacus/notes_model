function testSingleNoteView() {
  var singleNoteView = new SingleNoteView(new Note("Favourite drink: Whisky"));
  var output = singleNoteView.writeHTML();
  if (output === "<div>Favourite drink: Whisky</div>") {
    console.log("Note is successfully returned with html tags.");
  }
  else {
    console.log("Note is not returned properly.");
  }

}

testSingleNoteView();

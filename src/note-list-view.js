(function(exports) {

  function ListView(noteListObj) {

    this.listOfNotes = noteListObj;
  }

  ListView.prototype.turnIntoHtml = function () {
    if(this.listOfNotes.notes.length > 0){
      var HtmlString ="";
      this.listOfNotes.notes.forEach(function(note){

        HtmlString += "<li><div><a href=#" + note.id + ">" + note.text.substring(0,20)+ "</a></div></li>";
      });
      finalString = "<ul>" + HtmlString + "</ul>";
      return finalString;
    }
  };

  exports.ListView = ListView;

})(this);

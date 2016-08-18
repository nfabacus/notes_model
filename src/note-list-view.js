(function(exports) {

  function ListView(list) {

    this.listOfNotes = list;
  }

  ListView.prototype.turnIntoHtml = function () {

    var openTag = "<ul>";
    var closeTag = "</ul>";
    var HtmlString ="";

      this.listOfNotes.notes.forEach(function(note){

        HtmlString += "<li><div><a href=#" + note.id + ">" + note.text.substring(0,20)+ "</a></div></li>";
      });
      finalString = openTag + HtmlString + closeTag;
      return finalString;
    };

  exports.ListView = ListView;

})(this);

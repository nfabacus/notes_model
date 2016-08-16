(function(exports) {

  function NoteListView(list) {
    this.list = list;
  }
  NoteListView.prototype.html = function() {
    var string = "";
     this.list
      if (this.list.length !== 0) {

        this.list.forEach(function(item){
          string +="<li><div>"+item.viewNote()+"</div></li>";
        });
        string = "<ul>" + string + "</ul>";
      }
    return string;
  };
  exports.NoteListView = NoteListView;

})(this);

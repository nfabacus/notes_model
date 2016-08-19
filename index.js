var listModel, controller;

if(history.pushState) {
    history.pushState(null, null, '#');
}
else {
    window.location.hash = '#';
}

listModel = new noteList();
controller = new NoteController(listModel);
controller.displayWholePage();

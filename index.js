var listModel, controller;

listModel = new noteList();
controller = new NoteController(listModel);
controller.displayWholePage();

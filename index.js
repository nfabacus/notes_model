var list, controller;

list = new noteList();
list.createNote("Favourite drink: seltzer");

controller = new noteController(list);
controller.addToIndex();

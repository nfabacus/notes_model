var list, controller;

list = new noteList();
list.createNote("Note1: Kombucha biodiesel gochujang, bushwick pickled leggings flexitarian bitters 90's scenester single-origin coffee trust fund cold-pressed hammock dreamcatcher.");
list.createNote("Note2: Brunch kogi fingerstache, selvage listicle pork belly artisan try-hard taxidermy before they sold out.");
list.createNote("Note3: Knausgaard mlkshk meditation jean shorts, pop-up marfa skateboard selvage dreamcatcher biodiesel truffaut flexitarian sustainable pinterest.");



controller = new noteController(list);
controller.addToIndex();
controller.loadContent();

window.onload = function(){
  const handlebars = require("handlebars");
  const i18n = require("i18n");
  const ipcRenderer = require("electron").ipcRenderer;

  //Setting up i18n. In this example English and German are supported. Translation files
  //are put in subfolder "locales"
  i18n.configure({
    locales:['en', 'de', 'ja'],
    directory: __dirname + '/locales'
  });

  //This helper makes the connection between Handlebars and I18n
  //Here German is selected. In a real world application the user should of course be
  //able to choose this.
  handlebars.registerHelper('i18n', function(str){
    return i18n.__({phrase:str, locale:"de"});
  });

  //This replaces the entire document with the translation
  var template = handlebars.compile(document.documentElement.innerHTML);
  document.documentElement.innerHTML = template();

  //Notify main process that the translation is complete
  ipcRenderer.send("translation-complete", null);
};
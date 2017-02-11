window.onload = function(){
  const handlebars = require("handlebars");
  const i18n = require("i18n");
  const ipcRenderer = require("electron").ipcRenderer;
  const storage = require('electron-json-storage');
  const _ = require('lodash');

  storage.get('usersettings', function(error, data) {
    // Setting up i18n. Translation files
    // are put in subfolder "locales"
    i18n.configure({
      locales:['en', 'de', 'ja'],
      directory: __dirname + '/locales',
      defaultLocale: 'en'
    });
    
    if(error) throw error;

    i18n.setLocale(_.get(data, 'language'));

    // This helper makes the connection between Handlebars and I18n
    handlebars.registerHelper('i18n', function(str){
      return i18n.__(str);
    });

    // This replaces the entire document with the translation
    var template = handlebars.compile(document.documentElement.innerHTML);
    document.documentElement.innerHTML = template();

    // Notify main process that the translation is complete
    ipcRenderer.send("translation-complete", null);
  });
};

function translateContent(content) {
  const handlebars = require("handlebars");
  const i18n = require("i18n");
  const storage = require('electron-json-storage');
  const _ = require('lodash');

  storage.get('usersettings', function(error, data) {
    i18n.configure({
      locales:['en', 'de', 'ja'],
      directory: __dirname + '/locales',
      defaultLocale: 'en'
    });

    if(error) throw error;

    i18n.setLocale(_.get(data, 'language'));
  });

  // This helper makes the connection between Handlebars and I18n
  handlebars.registerHelper('i18n', function(str){
    return i18n.__(str);
  });

  // This replaces the entire document with the translation
  var template = handlebars.compile(content);
  content = template();

  return content;
}
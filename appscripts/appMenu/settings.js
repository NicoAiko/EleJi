function openAppMenuSettings() {
  const handlebars = require("handlebars");
  const i18n = require("i18n");
  const ipcRenderer = require("electron").ipcRenderer;
  const appInfo = require('./appInfo');

  $.get('templates/menu/settings.html').done((data) => {
    data = translateContent(data);
    $('body').append(data);

    $("div[id^='appInfo']").each(function() {
      var me = this;
      var field = this.id.replace('appInfo','');
      // Check, if there is another object, if so, let's do it with loops
      if(/[A-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/.test(field)) {
        var curObj = appInfo;
        var fields = field.split(/[A-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/);
        for(var f in fields) {
          curObj = curObj[f];
        }
        me.innerText = curObj;
      } else {
        if(appInfo[field]) {
          me.innerText = appInfo[field];
        }
      }
    });

    $('#appMenuSettings')
      .modal({
        closable: false,
        onDeny: function() { closeAppMenuSettings('cancel'); return false; },
        onApprove: function() { closeAppMenuSettings('save'); return false; },
        onHidden: function() { closeAppMenuSettings('remove'); return; }
      })
      .modal('show');
  });
  return;
}

function closeAppMenuSettings(action) {
  if(action === 'cancel') {
    $('#appMenuSettings').modal('hide');
    return;
  }
  else if(action === 'save') {
    // exec save action here
    $('#appMenuSettings').modal('hide');
    return;
  } else if(action === 'remove') {
    $('#appMenuSettings').parent().remove();
    return;
  } else {
    return false;
  }
}


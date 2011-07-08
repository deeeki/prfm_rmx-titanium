function a(msg) {
    Ti.UI.createAlertDialog({
      title : 'debug',
      message : msg
    }).show();
}

function d(msg) {
	Ti.API.debug(msg);
}
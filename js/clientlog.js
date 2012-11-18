function logError(details) {
  var url = window.location.protocol + '//' + Mage.Cookies.domain.substring(1) + Mage.Cookies.path + '/clientside_javascript_error_log';
  new Ajax.Request(url, {
    postBody: "context="+navigator.userAgent+"&details="+details,
  });
}

window.onerror = function(message, file, line) {
  logError(file + ':' + line + '\n\n' + message);
};

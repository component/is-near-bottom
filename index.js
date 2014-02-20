
module.exports = function(pad){
  var doc = document.documentElement;
  var win = window;
  pad = pad || 300;
  return win.pageYOffset + win.innerHeight >= doc.scrollHeight - pad;
};
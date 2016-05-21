(function() {
  var messages = [
    'we\'re working on it',
    'coming soon',
    'are you ready yet?',
    'brotally swagical yo',
    'soundcove is awesome',
    'are we there yet?',
    'get ready to rock July 2016'
  ];
  var message = messages[Math.floor(Math.random() * messages.length)];

  window.onload = function() {
    var el = document.querySelector('.message');
    el.innerText = message;
  }
})();

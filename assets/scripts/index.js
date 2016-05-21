(function() {
    var messages = [
        'we\'re working on it',
        'coming soon',
        'we\'re almost there',
        'get ready to rock July 2016'
    ];

    var message = messages[Math.floor(Math.random() * messages.length)];

    document.addEventListener('DOMContentLoaded', function() {
        var el = document.querySelector('.message');
        el.innerText = message;
    });
})();

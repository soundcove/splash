var arr = ["we\'re working on it", "coming soon", "we\'re almost there", "get ready to rock July 2016"];

document.querySelector('.message').innerHTML = arr[Math.floor(Math.random() * arr.length)];

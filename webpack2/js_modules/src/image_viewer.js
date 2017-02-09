import '../styles/image_viewer.css'; // notice we specify .css file

const image = document.createElement('img');

image.src = 'http://lorempixel.com/400/400';

document.body.appendChild(image);

import big from  '../assets/big.jpg';
import small from '../assets/small.jpg';

import '../styles/image_viewer.css'; // notice we specify .css file

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;

document.body.appendChild(bigImage);

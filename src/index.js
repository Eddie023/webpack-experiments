import { bar } from './bar';
import { makeImage } from './image';
import imageURL from './assets/images/logo.png';

bar();

const image = makeImage(imageURL);
document.body.appendChild(image);

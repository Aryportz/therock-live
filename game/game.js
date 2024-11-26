
import { snowFlake } from "./snowflakes.js"; 
import { animateBall } from "./liveball.js";  
import { DrawCustomers } from "./drinkingcustomer.js";  
import { drawAry, startBlink } from './ary.js';


const doorcanvas = document.getElementById('doorCanvas');
const doorctx = doorcanvas.getContext('2d');

const arycanvas = document.getElementById('aryCanvas');
const aryctx = arycanvas.getContext('2d');

const ballcanvas = document.getElementById('ballCanvas');
const ballctx = ballcanvas.getContext('2d');

const blinkcanvas = document.getElementById('blinkCanvas');
const blinkctx = blinkcanvas.getContext('2d');

// Start the animations when the window loads
window.addEventListener('load', () => DrawCustomers(doorctx, doorcanvas));
window.addEventListener('load', () => animateBall(ballctx, ballcanvas));
window.addEventListener('load', snowFlake);
window.addEventListener('load', drawAry(aryctx, arycanvas, -55, 28, 0.3)); 
window.addEventListener('load', () => startBlink(blinkctx, blinkcanvas, -50.6, 0.46, 0.27));


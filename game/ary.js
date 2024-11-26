export { drawAry, drawBlink, startBlink };

const aryImage = new Image();
aryImage.src = './images/animations/ary_idle.png'; 

const blinkImage = new Image();
blinkImage.src = './images/animations/eye-blink.png';

let blinkVisible = false; // Tracks whether the blink is currently visible
const blinkDuration = 100; // Duration of the blink (in ms)
const blinkIntervalMin = 2000; // Minimum time between blinks (in ms)
const blinkIntervalMax = 8000; // Maximum time between blinks (in ms);

/**
 * Draws the Ary image on the canvas with scaling and positioning options.
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {HTMLCanvasElement} canvas - The canvas element.
 * @param {number} [xOffset=0] - Horizontal offset for positioning.
 * @param {number} [yOffset=0] - Vertical offset for positioning.
 * @param {number} [scale=1] - Scale factor to adjust the size of the image.
 */
function drawAry(ctx, canvas, xOffset = 0, yOffset = 0, scale = 0.3) {
  // Ensure the image is loaded before drawing
  if (!aryImage.complete) {
    aryImage.onload = () => {
      drawAryOnCanvas(ctx, canvas, xOffset, yOffset, scale);
    };
  } else {
    drawAryOnCanvas(ctx, canvas, xOffset, yOffset, scale);
  }
}

function drawAryOnCanvas(ctx, canvas, xOffset, yOffset, scale) {
  const imageWidth = aryImage.width; // Original image width
  const imageHeight = aryImage.height - 40; // Original image height
  
  // Get the scaled width and height based on the scale factor
  const newWidth = imageWidth * scale;
  const newHeight = imageHeight * scale;

  // Get canvas dimensions to center the image
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const xPos = (canvasWidth - newWidth) / 2 + xOffset;
  const yPos = (canvasHeight - newHeight) / 2 + yOffset;

  // Draw the image on the canvas with the scaled width/height and position
  ctx.drawImage(aryImage, xPos, yPos, newWidth, newHeight);
}


function drawBlink(ctx, canvas, xOffset = 0, yOffset = 0, scale = 1) {
  const imageWidth = blinkImage.width;
  const imageHeight = blinkImage.height;
  
  const newWidth = imageWidth * scale;
  const newHeight = imageHeight * scale;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const xPos = (canvasWidth - newWidth) / 2 + xOffset;
  const yPos = (canvasHeight - newHeight) / 2 + yOffset;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (blinkVisible) {
    ctx.drawImage(blinkImage, xPos, yPos, newWidth, newHeight); 
  }

  requestAnimationFrame(() => drawBlink(ctx, canvas, xOffset, yOffset, scale));
}

function scheduleBlink(ctx, canvas, xOffset, yOffset, scale) {
  const blinkInterval = Math.random() * (blinkIntervalMax - blinkIntervalMin) + blinkIntervalMin;

  setTimeout(() => {
    blinkVisible = true;
    setTimeout(() => {
      blinkVisible = false;
      scheduleBlink(ctx, canvas, xOffset, yOffset, scale);
    }, blinkDuration);
  }, blinkInterval);
}

function startBlink(ctx, canvas, xOffset = 0, yOffset = 0, scale = 1) {
  scheduleBlink(ctx, canvas, xOffset, yOffset, scale);
  drawBlink(ctx, canvas, xOffset, yOffset, scale);
}

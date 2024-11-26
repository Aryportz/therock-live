export { DrawCustomers };

// Drinking Customer
const spriteSheet = new Image();
spriteSheet.src = './images/animations/drinking-customer-spritesheet.png';

const spriteWidth = 100; // Width of each frame
const spriteHeight = 90; // Height of each frame
const framesPerRow = 2; // Number of frames per row
const customerWidth = 160;
const customerHeight = 140;

let currentFrame = 0; // Current frame to draw
let frameDelay = 0; // Delay counter for animation speed
let animationSpeed = 20; // Higher means slower animation, lower means faster

let playAnimation = false; // Controls whether the animation should play
let nextPlayDelay = 0; // Random delay before the animation plays again

// Function to draw a single frame (for fallback or during animation)
function drawFrame(ctx, canvas, frameIndex, alpha = 0.5) {
    const col = frameIndex % framesPerRow;
    const row = Math.floor(frameIndex / framesPerRow);
  
    const sx = col * spriteWidth; // X position of the frame in the sheet
    const sy = row * spriteHeight; // Y position of the frame in the sheet
  
    // Set the transparency level
    ctx.globalAlpha = alpha;
  
    // Draw the frame to the canvas
    const dx = (canvas.width - spriteWidth) * 0.9;
    const dy = (canvas.height - spriteHeight) * 0.47;
    ctx.drawImage(spriteSheet, sx, sy, spriteWidth, spriteHeight, dx, dy, customerWidth, customerHeight);
  
    // Reset transparency to default for other operations
    ctx.globalAlpha = 1.0;
  }
  

function DrawCustomers(ctx, canvas) {
    // Clear the canvas to avoid overlaps
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    if (!playAnimation) {
      // Always show the first frame during the pause
      drawFrame(ctx, canvas, 0);
      // Ensure the next animation is scheduled
      if (nextPlayDelay === 0) {
        scheduleNextAnimation(ctx, canvas);
      }
    } else {
      // Increment the frame delay counter
      frameDelay++;
      if (frameDelay >= animationSpeed) {
        frameDelay = 0; // Reset the delay counter
        currentFrame++; // Move to the next frame
  
        if (currentFrame >= 8) { // Reset when all frames are played
          currentFrame = 0;
          playAnimation = false; // Stop animation
          scheduleNextAnimation(ctx, canvas); // Schedule the next animation
          return;
        }
      }
  
      // Draw the current frame
      drawFrame(ctx, canvas, currentFrame);
    }
  
    // Continue requesting frames, even during pause
    requestAnimationFrame(() => DrawCustomers(ctx, canvas));
  }
  
  

// Function to schedule the next animation
function scheduleNextAnimation(ctx, canvas) {

  const delaySeconds = Math.floor(Math.random() * (10 - 3 + 1)) + 3; // Random delay between 3 and 10 seconds
  nextPlayDelay = delaySeconds * 1000; // Convert to milliseconds

  setTimeout(() => {
    playAnimation = true; // Start playing animation
    currentFrame = 0; // Reset frame
    DrawCustomers(ctx, canvas); // Call animation function
  }, nextPlayDelay);
}

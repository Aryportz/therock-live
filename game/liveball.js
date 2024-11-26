export { animateBall };

// Ball Animation Settings
let ballRadius = 7; // Initial radius of the ball
let growing = true; // Tracks whether the ball is growing or shrinking

// Ball animation function
function animateBall(ctx, canvas) {
  // Clear the canvas (only the ball area)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the pulsing ball
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(canvas.width * 0.05, canvas.height * 0.08, ballRadius, 0, Math.PI * 2);
  ctx.fill();

  // Update the ball's radius
  if (growing) {
    ballRadius += 0.1; // Increase radius
    if (ballRadius >= 8) growing = false; // Reverse when it reaches max size
  } else {
    ballRadius -= 0.2; // Decrease radius
    if (ballRadius <= 5) growing = true; // Reverse when it reaches min size
  }

  // Request the next animation frame
  requestAnimationFrame(() => animateBall(ctx, canvas));
}

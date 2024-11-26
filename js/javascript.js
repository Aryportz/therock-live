// Resize the canvas to fit its container
function resizeCanvas() {
    const canvas = document.getElementById('doorCanvas');
    const ctx = canvas.getContext('2d');
    const container = document.querySelector('.canvas-container');
    
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  
    // Example: Draw a rectangle on the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
  }
  
  // Initialize the canvas size
  resizeCanvas();
  
  // Re-adjust canvas size when the window is resized
  window.addEventListener('resize', resizeCanvas);
  
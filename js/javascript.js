function resizeCanvas() {
  const canvases = document.querySelectorAll('.canvas-layer');
  canvases.forEach(canvas => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Call the resize function when the window is resized
window.addEventListener('resize', resizeCanvas);

// Initial call to set the canvas size
resizeCanvas();

  
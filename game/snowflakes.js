export function snowFlake() {
    const canvas = document.getElementById('snowCanvas');
    const ctx = canvas.getContext('2d');

    const flakes = [];
    const flakeCount = 200;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function reset(flake) {
        flake.x = Math.random() * canvas.width;
        flake.y = 0;
        flake.size = Math.random() + 3;
        flake.speed = Math.random() * 1.5 + 0.5;
        flake.velY = flake.speed;
        flake.velX = Math.random() * 3 - 1; // Slight horizontal movement
        flake.opacity = Math.random() * 0.7 + 0.3;
    }

    function snow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        flakes.forEach((flake) => {
            flake.x += flake.velX;
            flake.y += flake.velY;

            // Recycle flakes that go out of bounds
            if (flake.y >= canvas.height || flake.x >= canvas.width || flake.x <= 0) {
                reset(flake);
            }

            // Draw the snowflake
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
            ctx.fill();
        });

        requestAnimationFrame(snow);
    }

    // Initialize the flakes
    for (let i = 0; i < flakeCount; i++) {
        const flake = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() + 0.5,
            speed: Math.random() * 1.5 + 0.5,
            velY: Math.random() * 1.5 + 0.5,
            velX: Math.random() * 2 - 1,
            opacity: Math.random() * 0.7 + 0.3,
        };
        flakes.push(flake);
    }

    // Start the animation
    snow();
}

import Ball from '../utils/ball.js';

export {
    canvasApp
}

function canvasApp() {
    const canvas = document.createElement('canvas');
    canvas.width = 1066;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    const ball = new Ball();
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radiusX = 150;
    const radiusY = 100;
    const speed = 0.05;
    let angle = 0;

    (function draw() {
        window.requestAnimationFrame(draw);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ball.x = centerX + Math.sin(angle) * radiusX;
        ball.y = centerY + Math.cos(angle) * radiusY;
        angle += speed;
        ball.draw(ctx);
    }())

    return canvas;
}

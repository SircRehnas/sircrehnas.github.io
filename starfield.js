// Configuración del campo de estrellas
const STAR_COLOR = '#fff';
const STAR_SIZE = 2;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;
const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let scale = 1;
let width, height;
let stars = [];
let pointerX, pointerY;
let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
let touchInput = false;

// Generar estrellas
function generate() {
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: 0,
            y: 0,
            z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)
        });
    }
}

// Posicionar estrella
function placeStar(star) {
    star.x = Math.random() * width;
    star.y = Math.random() * height;
}

// Reciclar estrella cuando sale de los límites
function recycleStar(star) {
    let direction = 'z';
    let vx = Math.abs(velocity.x);
    let vy = Math.abs(velocity.y);

    if (vx > 1 || vy > 1) {
        let axis;
        if (vx > vy) {
            axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
        } else {
            axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
        }

        if (axis === 'h') {
            direction = velocity.x > 0 ? 'l' : 'r';
        } else {
            direction = velocity.y > 0 ? 't' : 'b';
        }
    }

    star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

    if (direction === 'z') {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
    } else if (direction === 'l') {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
    } else if (direction === 'r') {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
    } else if (direction === 't') {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
    } else if (direction === 'b') {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
    }
}

// Ajustar tamaño del canvas
function resize() {
    scale = window.devicePixelRatio || 1;
    width = window.innerWidth * scale;
    height = window.innerHeight * scale;
    canvas.width = width;
    canvas.height = height;
    stars.forEach(placeStar);
}

// Bucle de animación
function step() {
    context.clearRect(0, 0, width, height);
    update();
    render();
    requestAnimationFrame(step);
}

// Actualizar posición de estrellas
function update() {
    velocity.tx *= 0.96;
    velocity.ty *= 0.96;
    velocity.x += (velocity.tx - velocity.x) * 0.8;
    velocity.y += (velocity.ty - velocity.y) * 0.8;

    stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;
        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        if (star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || 
            star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD) {
            recycleStar(star);
        }
    });
}

// Dibujar estrellas
function render() {
    stars.forEach((star) => {
        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;

        context.beginPath();
        context.moveTo(star.x, star.y);

        let tailX = velocity.x * 2;
        let tailY = velocity.y * 2;

        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        context.lineTo(star.x + tailX, star.y + tailY);
        context.stroke();
    });
}

// Mover puntero
function movePointer(x, y) {
    if (typeof pointerX === 'number' && typeof pointerY === 'number') {
        let ox = x - pointerX;
        let oy = y - pointerY;
        velocity.tx = velocity.tx + (ox / 8 * scale) * (touchInput ? 1 : -1);
        velocity.ty = velocity.ty + (oy / 8 * scale) * (touchInput ? 1 : -1);
    }
    pointerX = x;
    pointerY = y;
}

// Eventos
function onMouseMove(event) {
    touchInput = false;
    movePointer(event.clientX, event.clientY);
}

function onTouchMove(event) {
    touchInput = true;
    movePointer(event.touches[0].clientX, event.touches[0].clientY, true);
    event.preventDefault();
}

function onMouseLeave() {
    pointerX = null;
    pointerY = null;
}

// Inicialización
generate();
resize();
step();

window.onresize = resize;
canvas.onmousemove = onMouseMove;
canvas.ontouchmove = onTouchMove;
canvas.ontouchend = onMouseLeave;
document.onmouseleave = onMouseLeave;

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = "rgba(255, 0, 0, .5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, .5)";
// c.fillRect(200, 300, 100, 100);
// c.fillStyle = "rgba(255, 255, 0, .5)";
// c.fillRect(400, 300, 100, 100);
// 
// console.log(canvas);
// 
// // line
// c.beginpath();
// c.moveto(50, 300);
// c.lineto(300, 100);
// c.lineto(400, 300);
// c.strokestyle = "#fa3fa8";
// c.stroke();
// 
// // circle
// 
// for (let i = 0; i < 100; ++i) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     let r, g, b;
//     r = Math.random() * 255;
//     g = Math.random() * 255;
//     b = Math.random() * 255;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
//     c.stroke();
// 
// }
let mouse = {
    x: undefined,
    y: undefined,
}

const MAX_RADIUS = 40;
// const MIN_RADIUS = 2;

const colorArray = [
    "#042940",
    "#005C53",
    "#9FC131",
    "#DBF227",
    "#D6D58E"
];

window.addEventListener("mousemove", function(event) {
    mouse.x = event.x; 
    mouse.y = event.y; 
});

window.addEventListener("resize", function(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < MAX_RADIUS)
            this.radius += 1;
        }
        else if (this.radius > this.minRadius){
            this.radius -= 1;
        }
    }
}


let circles = [];


function init() {
    circles = [];
    for (let i = 0; i < 500; ++i) {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (innerWidth - 2 * radius) + radius;
        let y = Math.random() * (innerHeight - 2 * radius) + radius;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);
        circles.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circles.length; ++i) {
        circles[i].draw();
        circles[i].update();
    }
}

init();
animate();

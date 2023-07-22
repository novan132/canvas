var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillStyle = "rgba(255, 0, 0, .5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 255, 0, .5)";
c.fillRect(200, 300, 100, 100);
c.fillStyle = "rgba(255, 255, 0, .5)";
c.fillRect(400, 300, 100, 100);

console.log(canvas);

// line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa3fa8";
c.stroke();

// circle

for (let i = 0; i < 100; ++i) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r, g, b;
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
    c.stroke();

}

var c = document.getElementById("myCanvas");
const width = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
for(let i = 0; i < 10; i++){
ctx.moveTo(i*70, 0);
ctx.lineTo(i*70, width.offsetHeight);
ctx.stroke();
}
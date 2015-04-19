/* globals Vector */

/* Reference your own npm packages, with npm install and require */

var Color = require('color');
var color = Color('#ff7700');

document.addEventListener('ready', function (event) {
  var boxes = [];

  function addBox (x,y,z) {
    var el = document.createElement('box');

    el.position = new Vector(x,y,z);
    el.style.color = Color({
      r: Math.random()*255,
      g: Math.random()*255,
      b: Math.random()*255
    }).hexString();

    document.scene.appendChild(el);
    boxes.push(el);
  }

  var i;

  for(i=0; i<100;i++) {
    addBox(Math.random()*20-10, Math.random()*10, Math.random()*20-10);
  }

  setInterval(function () {
    i = Math.floor(Math.random() * boxes.length);

    boxes[i].setX(Math.random()*10-5);
    boxes[i].setZ(Math.random()*10-5);
    boxes[i].setY(5);
  }, 500);
});

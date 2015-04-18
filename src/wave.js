/* globals Vector */

/* Reference your own npm packages, with npm install and require */

var Color = require('color');
var color = Color('#ff7700');

document.addEventListener('ready', function (event) {
  var boxes = [],
    startPosition = new Vector(0, 0, 0);

  function addBox (index) {
    var el = document.createElement('box');

    el.position = new Vector(0, 0.5, -index * 2).add(startPosition);
    el.style.color = color.hexString();

    document.scene.appendChild(el);
    boxes.push(el);
  }

  var i = 0,
    t = 0;

  for (i = 0; i !== 20; i++) {
    addBox(i);
  }

  setInterval(function () {
    i = 0;
    t += 0.2;

    boxes.forEach(function (box) {
      i++;
      // 0-1 capped sin
      var height = Math.sin(i / 2 + t) / 2 + 0.5;
      box.position.y = height * 4 + 0.5;
      box.style.color = color.clone().lighten(height).hexString();
    });
  }, 1000 / 10);
});

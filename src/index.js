
/* global PIXI */

import patrick from './patrick.js';

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);
app.stage.addChild(patrick);

app.ticker.add(function(delta) {
  patrick.rotation += 0.01 * delta;
});

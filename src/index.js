
/* global PIXI */

import patrick from './patrick.js'
import {getDeck} from './fakeFetch.js'
import card from '../assets/cards/symbol10.png'

const app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb})
document.body.appendChild(app.view)
app.stage.addChild(patrick)
app.stage.addChild(card)

console.log('this is a ', getDeck('../assets',8))

app.ticker.add(delta => {
  patrick.rotation += 0.01 * delta
})

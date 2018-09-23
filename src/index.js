import {
    Application,
    loader,
    Sprite,
} from 'pixi.js'
import {randomDeckNumber, randomNumber} from './utils.js'

const {innerWidth: width, innerHeight: height} = window
const backgroundColor = {backgroundColor : 0x2A1D32}

const applicationConfig = {
    width,
    height,
    antialias: true,
    transparent: false,
    resolution: 1
}

const app = new Application(applicationConfig)
document.body.appendChild(app.view)

const setup = () => {
    let id = loader.resources["spritesheet.json"].textures

    let numberOfCards = 6
    let spacing = 200

    for(let i = 0; i <= numberOfCards; i++) {
        let blob = new Sprite(id[`deck_${i}.png`])

        blob.x = spacing * i
        blob.y = randomNumber(0, app.stage.height)

        app.stage.addChild(blob)
    }
}

loader.add('spritesheet.json').load(setup)

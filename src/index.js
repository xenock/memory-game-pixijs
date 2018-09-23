import {
    Application,
    loader,
    Sprite,
} from 'pixi.js'

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

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }


    for(let i = 0; i <= numberOfCards; i++) {
        let blob = new Sprite(id[`deck_${i}.png`])

        blob.x = spacing * i
        blob.y = randomInt(0, app.stage.height)

        app.stage.addChild(blob)
    }
}

loader.add('spritesheet.json').load(setup)

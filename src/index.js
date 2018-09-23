import {
    Application,
    loader,
    Sprite,
    Texture
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

const onClick = () => {
    console.log(arguments)
}

const setup = () => {
    let deckTextures = loader.resources["spritesheet.json"].textures

    let numberOfCards = 6
    let spacing = 200

    for(let i = 0; i <= numberOfCards; i++) {
        let backTexture = Texture.from(deckTextures[`back_${i}.png`])
        let frontTexture = Texture.from(deckTextures[`front_${i}.png`])
        let card = new Sprite(backTexture)

        card.bol = false
        card.interactive = true
        console.log("card.interactive = ", card.interactive);
        card.buttonMode = true
        card.x = spacing * i
        card.y = randomNumber(0, app.stage.height)

        card.on('pointerDown', onClick)
        app.stage.addChild(card)
    }
}

loader.add('spritesheet.json').load(setup)

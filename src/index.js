import {
    Application,
    loader,
    Sprite,
    Texture
} from 'pixi.js'
import {randomDeckNumber, randomNumber} from './utils.js'
import {applicationConfig} from './application-config.js'

const app = new Application(applicationConfig)
document.body.appendChild(app.view)

loader.add('spritesheet.json').load(() => {
    const deckTextures = loader.resources["spritesheet.json"].textures

    let numberOfCards = 6
    let spacing = 200

    for(let i = 0; i <= numberOfCards; i++) {
        let backTexture = Texture.from(deckTextures[`back_${i}.png`])
        let frontTexture = Texture.from(deckTextures[`symbol${i}.png`])
        let card = new Sprite(backTexture)

        card.bol = false
        card.interactive = true
        card.buttonMode = true
        card.x = spacing * i
        card.y = randomNumber(0, app.stage.height)

        card.on('click', () => {
            card.texture
            card.texture = frontTexture
        })

        app.stage.addChild(card)
    }
})

import {
    Application,
    loader,
    Sprite,
} from 'pixi.js'

const {innerWidth, innerHeight} = window

const app = new Application(innerWidth, innerHeight, {backgroundColor : 0x2A1D32})
document.body.appendChild(app.view)

const setup = () => {
    let id = loader.resources["spritesheet.json"].textures;

    let card = new Sprite(id["deck_1.png"]);
    app.stage.addChild(card);

    card.x = app.stage.width - card.width
    card.y = app.stage.height / 2 - card.height / 2;
    app.stage.addChild(card);
}

loader.add('spritesheet.json').load(setup)

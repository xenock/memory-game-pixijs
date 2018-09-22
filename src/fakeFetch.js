
const randomNumber = () => Math.floor(Math.random() * (52 - 0))

const generateFileName = () => {
    let number = randomNumber()
    return `symbol${number}.png`
}

const filenames = numberOfCards => {
    return new Array(numberOfCards).fill(0).map(generateFileName)
}

export const getDeck = (route, numberOfCards) => filenames(numberOfCards).map(filename => `${route}/${filename}`)

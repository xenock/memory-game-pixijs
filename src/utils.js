
export const randomDeckNumber = () => randomNumber(0, 52)

export const randomNumber = (max, min) => Math.floor(Math.random() * (max - min)) + min

export const generateFileName = () => {
    let number = randomDeckNumber()
    return `symbol${number}.png`
}

export const getDeck = numberOfCards => {
    return new Array(numberOfCards).fill(0).map(generateFileName)
}

input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let emptyobstacles = 0
let ticks = 0
let bird: game.LedSprite = null
let obstacles: game.LedSprite[] = []
bird = game.createSprite(2, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    let list: game.LedSprite[] = []
    while (obstacles.length > 0 && list[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacles of obstacles) {
        obstacles.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyobstacles = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyobstacles) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }
    ticks += 1
    basic.pause(1000)
})

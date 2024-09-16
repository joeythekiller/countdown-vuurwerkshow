let Countdown = 0
basic.showString("3")
basic.pause(200)
basic.showString("2")
basic.pause(200)
basic.showString("1")
basic.pause(200)
Countdown = 1
basic.forever(function () {
    if (Countdown == 1) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . # .
                . . . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # .
                . . . # .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . # .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . # .
                . . . # .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . # .
                . . . # .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # .
                . . . # .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . # .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . # .
                . . . # .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
        }
    }
})

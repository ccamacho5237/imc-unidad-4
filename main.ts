input.onButtonPressed(Button.A, function () {
    peso += 1
    basic.showNumber(peso)
})
input.onGesture(Gesture.Shake, function () {
    peso = 74
    basic.showNumber(peso)
})
input.onButtonPressed(Button.AB, function () {
    estado = 10000 * (peso / (altura * altura))
    basic.showNumber(peso)
    while (estado == 0 && estado <= 18.4) {
        basic.showString("delgado/a")
        basic.showNumber(estado)
        basic.clearScreen()
    }
    while (estado >= 18.5 && estado <= 25) {
        basic.showString("saludable")
        basic.showNumber(estado)
        basic.clearScreen()
    }
    while (estado >= 25.1 && estado <= 29.9) {
        basic.showString("sobrepeso")
        basic.showNumber(estado)
        basic.clearScreen()
    }
    while (estado >= 30) {
        basic.showString("obesidad")
        basic.showNumber(estado)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    peso += -1
    basic.showNumber(peso)
})
let estado = 0
let altura = 0
let peso = 0
peso = 74
altura = 180

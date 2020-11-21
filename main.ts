let snelheid = 0
let ypositie = 0
input.onGesture(Gesture.LogoDown, function () {
    snelheid = 0
})
input.onGesture(Gesture.ScreenUp, function () {
    snelheid = -1
})
input.onGesture(Gesture.LogoUp, function () {
    snelheid = 1
})
basic.forever(function () {
    led.unplot(2, ypositie)
    ypositie += ypositie
    ypositie = Math.constrain(ypositie, 0, 4)
    led.plot(2, ypositie)
    basic.pause(100)
})

input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    128
    )
})

input.onButtonPressed(Button.A, function () {
    basic.showString("F")
    JoyCar.drive(FRDirection.Forward, 40)
})
input.onButtonPressed(Button.B, function () {
	
})
JoyCar.bias(LRDirection.Left, 45)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    if (JoyCar.obstacleavoidance(SensorLRSelection.Left) && JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
        basic.showString("B")
        JoyCar.stop(StopIntensity.Intense)
    } else if (JoyCar.obstacleavoidance(SensorLRSelection.Left)) {
        basic.showString("L")
        JoyCar.stop(StopIntensity.Intense)
    } else if (JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
        basic.showString("R")
        JoyCar.stop(StopIntensity.Intense)
    } else {
        basic.showString("-")
    }
})
control.inBackground(function () {
	
})

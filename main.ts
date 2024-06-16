let Data = 0
let Brightness = 0
let ldr_data = 0
basic.forever(function () {
    Data = pins.analogReadPin(AnalogPin.P0)
    Brightness = Math.map(Data, 0, 1023, 255, 0)
    led.setBrightness(Brightness)
    serial.writeValue("brightness level", 0)
    ldr_data = Math.map(Data, 0, 1023, 1023, 0)
    led.plotBarGraph(
    ldr_data,
    1023
    )
})

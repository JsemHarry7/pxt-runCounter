radio.setTransmitPower(6);
radio.setFrequencyBand(7);
radio.setTransmitSerialNumber(true);
radio.setGroup(69);

const lightMin = 50;
let c = false;
let canStart = false;
input.onButtonPressed(Button.A, function(){
    c = true;
})

let time1 : number;
let start = false
basic.forever(function() {
    if (start) return;
    if (c == true) {
        for(let i = 3; i >= 1; i--){
            basic.showNumber(i)
            basic.pause(1000)
        }
        basic.clearScreen()
        // basic.showLeds(`
        // # . # . #
        // . # . # .
        // # . # . #
        // . # . # .
        // # . # . #
        // `)
        c = false
        canStart = true
        time1 = input.runningTime()
    }
    let light = input.lightLevel();
    if (light < 50 && canStart){
        radio.sendNumber(1)
        console.log(1)
        let time2 = input.runningTime()

        let time = time2 - time1
        console.log(time)
        //radio.sendNumber(time)
        start = true
    }
})
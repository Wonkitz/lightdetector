music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (input.lightLevel() > 0) {
        music.playMelody("B G B G B G B G ", 150)
    }
    basic.pause(500)
})

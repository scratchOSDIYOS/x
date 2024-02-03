input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
})
let LIT = true

let zSpacing = -1000;
let lastPos = zSpacing / 5;
let $frames = document.getElementsByClassName('frame')
let frames = Array.from($frames)
let zVals = []

let isFirstScroll = true

window.onscroll = function () {
    let top = document.documentElement.scrollTop
    let delta = lastPos - top;
    lastPos = top

    frames.forEach((el, i) => {
        if(isFirstScroll) zVals[i] = (i * zSpacing) + zSpacing
        zVals[i] +=  (delta * -5)

        const opacity =  zVals[i] > Math.abs(zSpacing)  ? 0 : 1;
        frames[i].setAttribute('style', `transform: translateZ(${zVals[i]}px); opacity:${opacity}`)
    })
    isFirstScroll = false
    console.log(zVals)
}


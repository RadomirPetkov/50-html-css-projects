const backgroundElement = document.querySelector('.bg')
const loadingElement = document.querySelector('.loading')


let currentNum = 0


const count = () => {
    currentNum++
    if (currentNum > 99) {
        clearInterval(load)
    }

    loadingElement.textContent = `${currentNum}%`
    loadingElement.style.opacity = scale(currentNum, 0, 100, 1, 0)
    backgroundElement.style.filter = `blur(${scale(currentNum, 0, 100, 30, 0)}px)`
}


const load = setInterval(count, 30)



//scale function
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers


function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
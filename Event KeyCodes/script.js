const keyElement = document.getElementById('key')
const keyCodeElement = document.getElementById('keyCode')
const codeElement = document.getElementById('code')
const heading = document.getElementById('heading')


window.addEventListener('keydown', (e) => {

    e.key == " " ? keyElement.textContent = "Space" : keyElement.textContent = e.key
    keyCodeElement.textContent = e.keyCode
    codeElement.textContent = e.code

    heading.classList.remove('show')
    keyElement.parentElement.classList.add('show')
    keyCodeElement.parentElement.classList.add('show')
    codeElement.parentElement.classList.add('show')
})
const openElement = document.getElementById('open')
const closeElement = document.getElementById('close')
const container = document.querySelector('.container')

openElement.addEventListener('click', () => {
    container.classList.add('show-nav')
})


closeElement.addEventListener('click', () => {
    container.classList.remove('show-nav')
})
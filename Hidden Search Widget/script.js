const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const searchElement = document.querySelector('.search')


btn.addEventListener('click', () => {
    searchElement.classList.toggle('active')
    input.focus()
})
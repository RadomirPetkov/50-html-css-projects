const header = document.getElementById("header")
const title = document.getElementById("title")
const excerept = document.getElementById("excrept")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2000);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerept.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, consectetur.'
    name.innerHTML = 'Jane Doe'
    date.innerHTML = 'Oct, 10, 2022'


    animated_bgs.forEach(bg=>{
        bg.classList.remove('animated-bg')
    })

    animated_bgs_texts.forEach(bg=>{
        bg.classList.remove('animated-bg-text')
    })
}

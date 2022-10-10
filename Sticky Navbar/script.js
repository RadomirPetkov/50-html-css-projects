const nav = document.querySelector("nav")

window.addEventListener("scroll", () => {
    if (scrollY > 250) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")
    }
})
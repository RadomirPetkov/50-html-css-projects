const countersElements = document.querySelectorAll(".counter")

countersElements.forEach(element => {
    const target = element.getAttribute('data-target')
    let currentNum = 0
    const increment = +target / 200


    const updateCounter = () => {
        element.textContent = currentNum


        if (currentNum < +target) {
            currentNum += increment
            setTimeout(updateCounter, 5)

        } else {
            element.textContent = target
        }
    }

    updateCounter()
})





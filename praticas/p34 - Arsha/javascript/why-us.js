let listOfItems = document.querySelectorAll('.why-us-section-list > li')

listOfItems.forEach((item) => {
    item.onclick = function() {
        listOfItems.forEach((itemList) => {
            if(itemList.className == 'showCard') {
                itemList.classList.toggle('hideCard')
            }
        })

        item.classList.toggle('showCard')
    }
})

// todos menos o que ta sendo clicado

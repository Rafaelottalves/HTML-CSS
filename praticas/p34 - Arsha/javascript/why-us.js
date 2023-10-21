let listOfItems = document.querySelectorAll('.why-us-section-list > li')

listOfItems.forEach((item) => {
    item.onclick = function() {
        item.classList.toggle('showCard')
        item.id = 'a'

        listOfItems.forEach((itemList) => {
            if(itemList.className == 'showCard' && itemList.id !== 'a') {
                itemList.classList.remove('showCard')
            }

            else {
                itemList.id = ''
            }
        })
    }
})

let filtersList = [...document.querySelectorAll('.portfolio-filters > li')]
// let portfolioImages = document.querySelector('.portfolio-images')

let imageList = [...document.querySelectorAll('.portfolio-images > div')]

filtersList.forEach((item) => {
    item.onclick = function(clickedItem) {
        let clickedElement = clickedItem.target

        if(clickedElement.innerText == 'All') {
            
        }

        if(clickedElement.innerText == 'App') {
            imageList.forEach((image) => {

                if(image.className != 'image-wrap-1' && image.className != 'image-wrap-3' && image.className != 'image-wrap-6') {
                    
                }
            })
        }

        if(clickedElement.innerText == 'Card') {
            console.log(clickedElement)
        }

        if(clickedElement.innerText == 'Web') {
            console.log(clickedElement)
        }
    }
})

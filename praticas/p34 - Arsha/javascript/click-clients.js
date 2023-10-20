let imgList = document.querySelectorAll('.clients > div img')

imgList.forEach((img) => {
    img.addEventListener('click', function(item) {
        let currentImg = item.target

        currentImg.classList.toggle('Clientcolor')
    })
})
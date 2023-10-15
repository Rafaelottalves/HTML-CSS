let dropDownList = document.querySelector('.drop-down-list')
let containerDrop = document.querySelector('.container-drop')

let containerDeepDrop = document.querySelector('.container-deep-drop')
let deepDropDownList = document.querySelector('.deep-drop-down-list')

containerDrop.onclick = function() {
    dropDownList.classList.toggle("showDrop")

    setTimeout(() => {
        dropDownList.classList.toggle("visible")
    })
}

containerDeepDrop.onclick = function() {
    deepDropDownList.classList.toggle('showDrop')

    setTimeout(() => {
        dropDownList.classList.toggle('new-visible')

        deepDropDownList.classList.toggle('visible')
    })
}

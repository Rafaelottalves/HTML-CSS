let dropDownList = document.querySelector('.drop-down-list')
let containerDrop = document.querySelector('.container-drop')

let containerDeepDrop = document.querySelector('.container-deep-drop')
let deepDropDownList = document.querySelector('.deep-drop-down-list')


let dropOption = document.querySelector('.container-drop > a')
let arrowList = document.querySelectorAll('.arrow-container div')

let deepDropOption = document.querySelector('.container-deep-drop > a')
let deepArrowList = document.querySelectorAll('.arrow-deep-container div')

containerDrop.onclick = function() {
    dropDownList.classList.toggle("showDrop")

    dropOption.classList.toggle('change-color')
    arrowList[0].classList.toggle('change-background')
    arrowList[1].classList.toggle('change-background')

    setTimeout(() => {
        dropDownList.classList.toggle("visible")
    })
}

containerDeepDrop.onclick = function() {
    deepDropDownList.classList.toggle('showDrop')

    deepDropOption.classList.toggle('change-color')
    deepArrowList[0].classList.toggle('change-background')
    deepArrowList[1].classList.toggle('change-background')

    setTimeout(() => {
        dropDownList.classList.toggle('new-visible')

        deepDropDownList.classList.toggle('visible')
    })
}

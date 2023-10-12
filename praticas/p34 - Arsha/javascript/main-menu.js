let menuHamburguer = document.querySelector('.container-menu-hamburguer')
let blocoMenuItems = document.querySelector('.bloco-menu-items')
let containerMenuItems = document.querySelector('.container-menu-items')
let transformed = false

function menuHamburguerChangeToNormal(menuList) {
    transformed = false

    if(menuList[0]) {
        menuList[0].style.cssText = `transform: rotate(0deg) translate(0px, 0px);`
    }

    if(menuList[1]) {
        menuList[1].style.display = 'block'
    }

    if(menuList[2]) {
        menuList[2].style.cssText = `transform: rotate(0deg) translate(0px, 0px);`
    }
}

function menuHamburguerChange(menuList) {
    transformed = true

    if(menuList[0]) {
        menuList[0].style.cssText = `transform: rotate(45deg) translate(0px, 5px);`
    }

    if(menuList[1]) {
        menuList[1].style.display = 'none'
    }

    if(menuList[2]) {
        menuList[2].style.cssText = `transform: rotate(-45deg) translate(0px, -5px);`
    }
}

menuHamburguer.onclick = function() {
    let menuList = document.querySelectorAll('.container-menu-hamburguer > div')

    transformed == true ? menuHamburguerChangeToNormal(menuList) : menuHamburguerChange(menuList)

    blocoMenuItems.classList.toggle('show')

    setTimeout(() => {
        blocoMenuItems.classList.toggle('visibility')
    })
}

let tabcontent = document.querySelectorAll('.tabcontent')
let tabheader__item = document.querySelectorAll('.tabheader__item')
let tabheader__item_active = document.querySelector('.tabheader__item_active')
let offer__slide = document.querySelectorAll('.offer__slide')
let right = document.querySelector('#right')
let left = document.querySelector('#left')
let current = document.querySelector('#current')
let btnAll = document.querySelectorAll('.btnAll')
let modal = document.querySelector('.modal')
let modal__close = document.querySelector(".modal__close")

for(let i = 0; i < tabheader__item.length; i++) {
tabcontent[i].style.display = 'none'
}
tabcontent[0].style.display = 'block'

for(let i = 0; i < tabheader__item.length; i++) {
    tabheader__item[i].addEventListener('click', () => {
        for(let j = 0; j < tabcontent.length; j++) {
            tabcontent[j].style.display = 'none'
            tabheader__item[j].classList.remove('tabheader__item_active')
        }
        tabcontent[i].style.display = "block"   
        tabheader__item[i].classList.add("tabheader__item_active")
    })
}

// ! mrekogmerobnerongeronbogmronge3ronorenoenroienberonbeorntghtgtrghoerihroi


let x = 0
let z = 1
for(let i = 0; i < 4; i++) {
    offer__slide[i].style.display = 'none'
}
offer__slide[0].style.display = "block"



right.addEventListener('click', () => {
    if (x < 3) {
        offer__slide[x].style.display = "none"
        x++; 
        z++;
        current.innerHTML = `0${z}`
        offer__slide[x].style.display = 'block'
    }
    else {
        offer__slide[x].style.display = "none"
        x = 0; 
        z = 1;
        offer__slide[x].style.display = "block"
        current.innerHTML = `0${z}`
    }
})  

left.addEventListener('click', () => {
    if (x > 0) {
        offer__slide[x].style.display = "none"
        x--; 
        z--;
        current.innerHTML = `0${z}`
        offer__slide[x].style.display = 'block'
    }
    else {
        offer__slide[x].style.display = "none"
        x = 3; 
        z = 4;
        offer__slide[x].style.display = "block"
        current.innerHTML = `0${z}` 
    }
})
btnAll[0].addEventListener('click', () => {
    modal.style.display = 'block'   
})

btnAll[1].addEventListener('click', () => {
    modal.style.display = 'block'
})

modal__close.addEventListener("click", () => {
    modal.style.display = 'none'
})
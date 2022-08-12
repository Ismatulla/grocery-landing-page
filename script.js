const header = document.querySelector('.header')
const heroSection = document.querySelector('.hero-section')
const searchForm = document.querySelector('.search-form')
const searchEl = document.querySelector('.search-icon')
const icons = document.querySelectorAll('.grocery-icon')
const loginForm = document.querySelector('.login-form')
const addedProducts = document.querySelector('.added-products')
const burgerIcon = document.querySelector('.menu-outline')
const closeIcon = document.querySelector('.close-outline')



icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        e.preventDefault()
        if (icon["name"] === "search-outline") {
            searchForm.classList.toggle('active')
            addedProducts.classList.remove('active')
            loginForm.classList.remove('active')

        } else if (icon["name"] === "cart-outline") {
            addedProducts.classList.toggle('active')
            searchForm.classList.remove('active')
            loginForm.classList.remove('active')
        } else if (icon["name"] === "person") {
            loginForm.classList.toggle('active')
            searchForm.classList.remove('active')
            addedProducts.classList.remove('active')
        }



    })

})
document.addEventListener('scroll', (e) => {
    searchForm.classList.remove('active')
    addedProducts.classList.remove('active')
    loginForm.classList.remove('active')
    header.classList.remove('nav-open')

})

closeIcon.addEventListener('click', (e) => {
    header.classList.toggle('nav-open')

})
burgerIcon.addEventListener('click', (e) => {
    header.classList.toggle('nav-open')
})
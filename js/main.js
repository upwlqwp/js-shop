const app = document.getElementById('app')

function getHeader() {
    const header = document.createElement('header')
    header.classList.add('header')

    const container = document.createElement('div')
    container.classList.add('container', 'header__container')

    const nav = document.createElement('nav')
    nav.classList.add('navigation')

    let link1 = document.createElement('a')
    link1.href = ''
    link1.classList.add('btn')
    link1.textContent = 'Main page'

    let link2 = document.createElement('a')
    link2.href = ''
    link2.classList.add('btn')
    link2.textContent = 'Buy'


    let link3 = document.createElement('a')
    link3.href = ''
    link3.classList.add('btn')
    link3.textContent = 'Contact'

    nav.append(link1, link2, link3)
    container.append(nav)
    header.append(container)
    return header
}

function getPageContainer() {

    const main = document.createElement('main')
    main.classList.add('page-container')

    return main
}

function getMainPage () {
    const page = document.createElement('div')
    page.classList.add('page', 'main-page', 'container')

    const mainTitle = getMainTitle('The main page')
    const list = document.createElement('ul')
    list.classList.add('product-list', 'list-reset')

list.append(
    getProductCard('First card', 100),
    getProductCard('Second card', 200),
    getProductCard('Third card', 300),

)

    page.append(mainTitle, list)
    return page
}

function getMainTitle(text){
    const title = document.createElement('h1')
    title.classList.add('main-title')
    title.textContent = text

    return title
}

function getProductCard (title, price){

    const item = document.createElement('li')
    item.classList.add('product-list__item')

    const productTitle = document.createElement('h2')
    productTitle.classList.add('product-list__title')
    productTitle.textContent = title

    const productPrice = document.createElement('strong')
    productPrice.classList.add('product-list__price')
    productPrice.textContent = `${price} eur`

    item.append(productTitle, productPrice)
    return item

}

const header = getHeader()
const pageContainer = getPageContainer()

const mainPage = getMainPage()
pageContainer.append(mainPage)
app.append(header, pageContainer)
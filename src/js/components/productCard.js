import { router } from "../main"

export function getProductCard(title, price) {

    const item = document.createElement('li')
    item.classList.add('product-list__item')

    const productTitle = document.createElement('h2')
    productTitle.classList.add('product-list__title')


    let productLink = document.createElement('a')
    productLink.textContent = title
    productLink.href = '/product'
    

    productLink.addEventListener('click', (event) => {
        event.preventDefault()
        router.navigate(`/product/${title}`)
    })

    productTitle.append(productLink)

    const productPrice = document.createElement('strong')
    productPrice.classList.add('product-list__price')
    productPrice.textContent = `${price} eur`

    const addCart = document.createElement('button')
    addCart.classList.add('product-list__btn')
    addCart.textContent = 'Add to cart'

    item.append(productTitle, productPrice, addCart)
    return item

}
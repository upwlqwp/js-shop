import { router } from "../main"
import { getCartBtn } from "./cartBtn";




export function getProductCard(title, price, image) {


    const item = document.createElement('li')
    item.classList.add('product-list__item')



    const productSubTitle = document.createElement('h3')
    productSubTitle.classList.add('product-list__title')
    productSubTitle.textContent = title

    


    // productTitle.append(productLink)

    const productImage = document.createElement('img')
    productImage.classList.add('product-list__img')
    productImage.src = `${image}`

    const productWrapper = document.createElement('div')
    productWrapper.classList.add('product-list__wrapper')

    const seeMore = document.createElement('a')
    seeMore.href = '/product'
    seeMore.classList.add('product-list__btn')
    seeMore.textContent = 'See more'

    seeMore.addEventListener('click', (event) => {
        event.preventDefault()
        router.navigate(`/product/${title}`)
    })

    const productPrice = document.createElement('strong')
    productPrice.classList.add('product-list__price')
    productPrice.textContent = `${price} EUR`

    const addCart = getCartBtn();

    productWrapper.append(  productPrice, addCart)
    item.append( productSubTitle, productImage,  seeMore, productWrapper)
    return item

}
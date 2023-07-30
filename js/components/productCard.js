export function getProductCard(title, price) {

    const item = document.createElement('li')
    item.classList.add('product-list__item')

    const productTitle = document.createElement('h2')
    productTitle.classList.add('product-list__title')
    productTitle.textContent = title

    const productPrice = document.createElement('strong')
    productPrice.classList.add('product-list__price')
    productPrice.textContent = `${price} eur`

    const addCart = document.createElement('button')
    addCart.classList.add('product-list__btn')
    addCart.textContent = 'Add to cart'

    item.append(productTitle, productPrice, addCart)
    return item

}
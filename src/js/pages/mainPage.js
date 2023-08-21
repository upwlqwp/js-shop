import { getProductCard } from '../components/productCard.js';
import { getMainTitle } from '../components/mainTitle.js';
import productImage1 from '../../assets/images/01.jpg'
import productImage2 from '../../assets/images/02.jpg'
import productImage3 from '../../assets/images/03.jpg'

export function getMainPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'main-page', 'container')

    const mainTitle = getMainTitle('The main page')
    const list = document.createElement('ul')
    list.classList.add('product-list', 'list-reset')

    list.append(
        getProductCard('Flowering Trees', 100, productImage1),
        getProductCard('Perennials', 200, productImage2),
        getProductCard('Roses', 300, productImage3),

    )

    page.append(mainTitle, list)
    return page
}
import { getProductCard } from '../components/productCard.js';
import { getMainTitle } from '../components/mainTitle.js';

export function getMainPage() {
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
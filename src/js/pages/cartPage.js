import { router } from '../main';

import { getMainTitle } from '../components/mainTitle.js';
import { getDescription } from '../components/desc.js';

export function getCartPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'cart-page', 'container')

    const mainTitle = getMainTitle('Cart')
    const mainDesc = getDescription('Buy')

    let orderLink = document.createElement('a')
    orderLink.href = '/order'
    orderLink.classList.add('order-link')
    orderLink.textContent = 'Order'

    orderLink.addEventListener('click', function (event) {
        event.preventDefault()
        router.navigate('/order')
    })

    page.append(mainTitle, mainDesc, orderLink)
    return page
}

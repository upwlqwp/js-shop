import { getMainTitle } from '../components/mainTitle.js';
import { getDescription } from '../components/desc.js';

export function getCartPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'cart-page', 'container')

    const mainTitle = getMainTitle('Cart')
    const mainDesc = getDescription('Buy')

    page.append(mainTitle, mainDesc)
    return page
}

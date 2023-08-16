import { getMainTitle } from '../components/mainTitle.js';
import { getDescription } from '../components/desc.js';


export function getOrderPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')

    const mainTitle = getMainTitle('Order')
    const mainDesc = getDescription('Order some product')

    page.append(mainTitle, mainDesc)
    return page
}

import { getMainTitle } from '../components/mainTitle.js';
import { getDescription } from '../components/desc.js';

export function getProductPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'product-page', 'container')

    const mainTitle = getMainTitle('Product')
    const mainDesc = getDescription('Description of product')

    page.append(mainTitle, mainDesc)
    return page
}
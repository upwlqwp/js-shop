import { getMainTitle } from '../components/mainTitle.js';
import { getDescription } from '../components/desc.js';


export function getCatalogPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')

    const mainTitle = getMainTitle('Catalog')
    const mainDesc = getDescription('Description of product')

    page.append(mainTitle, mainDesc)
    return page
}
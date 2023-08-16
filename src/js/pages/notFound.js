

import { getMainTitle } from '../components/mainTitle.js';



export function getNotFoundPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')

    const mainTitle = getMainTitle('Error')
 

    page.append(mainTitle)
    return page
}
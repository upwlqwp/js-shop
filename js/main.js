import { getHeader } from './components/header.js'
import { getPageContainer } from './components/pageContainer.js'
import { getMainTitle } from './components/mainTitle.js';
import { getDescription } from './components/desc.js';



const app = document.getElementById('app')

const header = getHeader()
const pageContainer = getPageContainer()

// export async function navigation(page) {
//     pageContainer.innerHTML = ''

//     switch (page) {
//         case 'cart':
//             const { getCartPage } = await import('./pages/cartPage.js')
//             const cartPage = getCartPage() // {getCatalogPage} after ()
//             pageContainer.append(cartPage)
//             break

//         case 'catalog':
//             const { getCatalogPage } = await import('./pages/catalogPage.js')
//             const catalogPage = getCatalogPage()
//             pageContainer.append(catalogPage)
//             break
//         default:
//             const { getMainPage } = await import('./pages/mainPage.js')
//             const mainPage = getMainPage()
//             pageContainer.append(mainPage)
//             break
//     }
// }



// navigation()

export const router = new Navigo('/');

router.on('/',   async () => {
    pageContainer.innerHTML = ''
    const { getMainPage } = await import('./pages/mainPage.js')
    const mainPage = getMainPage()
    pageContainer.append(mainPage)
    
})

router.on('/catalog',  async () => {
    pageContainer.innerHTML = ''
    const { getCatalogPage } = await import('./pages/catalogPage.js')
    const catalogPage = getCatalogPage()
    pageContainer.append(catalogPage)
})

router.on('/cart',  async () => {
    pageContainer.innerHTML = ''
    const { getCartPage } = await import('./pages/cartPage.js')
    const cartPage = getCartPage() // {getCatalogPage} after ()
    pageContainer.append(cartPage)
})

router.resolve()

app.append(header, pageContainer)


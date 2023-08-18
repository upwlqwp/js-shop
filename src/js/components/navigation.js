import { router } from '../main';


export function getNavigation(path, title ) {
    let link = document.createElement('a')
    link.href = path
    link.classList.add('btn')
    link.textContent = title
    link.addEventListener('click', (event) => {
        event.preventDefault()

        router.navigate(path)
    })

    return link
}
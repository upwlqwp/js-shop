import logoImage from '../../assets/images/logo.svg';


export function getLogo() {
    const logo = document.createElement('img')
    logo.classList.add('logo')
    logo.style.width = '180px'
    logo.style.height = '80px'
    logo.src = logoImage

    return logo
}
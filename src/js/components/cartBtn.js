import { router } from "../main";
import cartIcon from 'bundle-text:../../assets/images/cart.svg'

export function  getCartBtn () {
const cartBtn = document.createElement('a')
cartBtn.href = '/cart'
cartBtn.classList.add('cart-btn')
cartBtn.textContent = 'cart'
cartBtn.innerHTML = cartIcon
cartBtn.addEventListener('click', (event) => {
        event.preventDefault()

        router.navigate('/cart')
    })


return cartBtn
}
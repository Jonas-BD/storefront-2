import { Div, Heading, Image, Input, Label, Li, Link, Paragraph, Ul } from "../atoms/index.js"
import { getCartList } from "../../models/cartModel.js"
import { getToken } from "../../services/auth.js"

export const HeaderView = async () => {
    // This is the side header
    const el = document.createElement('header')
    el.className = 'bg-slate-700 p-4 text-white flex justify-between items-center'
    
    // Logo section (left side)
    const logo = Image('./assets/images/logo.svg', 'Logo', 'cursor-pointer')
    el.appendChild(logo)
    logo.addEventListener('click', () => {
        location.href = '/index.htm'
    })
    
    // Right side container for login and cart
    const rightContainer = Div('flex items-center gap-6')
    
    // Add login to header
    const p = Paragraph()
    const a = Link('/index.htm#/login', 'Log ind', 'block bg-slate-400 px-3 py-2 rounded-full border border-slate-800 hover:bg-slate-500 transition-colors')
    p.append(a)
    rightContainer.append(p)

    // Add cart to header
    const cart = Div('relative')
    const cartLink = Image('./assets/images/shopping-basket.svg', 'Shopping Basket', 'cursor-pointer hover:opacity-80 transition-opacity')
    const cartCounter = Div('absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold hidden')
    cart.append(cartLink, cartCounter)
    
    // Function to update cart counter
    const updateCartCounter = async () => {
        if (getToken()) {
            try {
                const cartItems = await getCartList()
                if (cartItems && cartItems.length > 0) {
                    cartCounter.textContent = cartItems.length.toString()
                    cartCounter.classList.remove('hidden')
                } else {
                    cartCounter.classList.add('hidden')
                }
            } catch (error) {
                cartCounter.classList.add('hidden')
            }
        } else {
            cartCounter.classList.add('hidden')
        }
    }
    
    // Update counter immediately and set up click event
    updateCartCounter()
    
    cartLink.addEventListener('click', () => {
        location.href = '/index.htm#/cart'
    })
    
    // Update counter when cart changes
    window.addEventListener('storage', (e) => {
        if (e.key === 'sgtprepper_token') {
            updateCartCounter()
        }
    })

    // Listen for cart updates
    window.addEventListener('cartUpdated', () => {
        updateCartCounter()
    })
    
    rightContainer.append(cart)
    
    el.append(rightContainer)
    cartLink.addEventListener('click', () => {
        location.href = '/index.htm#/cart'
    })

    return el
}

export const NavBarView = arrNavItems => {
    const el = document.createElement('nav')
    el.className = 'bg-sky-950'
    const ul = Ul('flex')

    arrNavItems.forEach(item => {
        const { url, title } = item

        const li = Li('list-none p-4')
        const item1 = Link(url, title, `block p-2 ${item.textColor}`)
        li.append(item1)
        ul.append(li)
    })
    el.append(ul)
    return el
}

export const MainView = (title, content) => {
    const el = document.createElement('main')
    el.className = 'p-4 min-h-60 container m-auto flex-grow'
    const h1 = Heading(title)
    el.append(h1, content)
    return el
}

export const FooterView = () => {
    const el = document.createElement('footer')
    el.className = 'mt-auto h-[168px] p-4 bg-[url(./assets/images/footer-bg.svg)] bg-center bg-no-repeat'
    return el
}

export const FormGroup = (title, name, placeholder, type, value) => {
    const el = Div('mb-4')
    const label = Label(title, name)
    const input = Input(name, placeholder, type, value)
    el.append(label, input)
    return el
}
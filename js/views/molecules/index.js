import { Div, Heading, Input, Label, Li, Link, Paragraph, Ul } from "../atoms/index.js"

export const HeaderView = () => {
    // This is the side header
    const el = document.createElement('header')
    el.className = 'bg-slate-700 p-4 text-white flex justify-between'
    const h1 = Heading('Sgt. prepper')
    el.appendChild(h1)
    
    // Add login to header
    const p = Paragraph()
    const a = Link('/index.htm#/login', 'Login', 'block bg-slate-400 px-3 py-2 rounded-lg border border-slate-800')
    p.append(a)
    el.append(p)

    // Add cart to header
    const cart = Paragraph()
    const cartLink = Link('/index.htm#/cart', 'Indkøbskurv')
    cart.append(cartLink)
    el.append(cart)

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
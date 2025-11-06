export const Fragment = () => {
    const el = document.createDocumentFragment()
    return el
}

export const Div = (className = '') => {
    const el = document.createElement('div')
    el.className = className
    return el
}

export const Paragraph = (className = '') => {
    const el = document.createElement('p')
    el.className = className
    return el
}

export const Heading = (text, num = 1, className = '') => {
    const el = document.createElement(`h${num}`)
    el.className = className
    el.textContent = text
    return el
}

export const Ul = (className = '') => {
    const el = document.createElement('ul')
    el.className = className
    return el
}

export const Li = (className = '') => {
    const el = document.createElement('li')
    el.className = className
    return el
}

export const Link = (to, text = '', className = '') => {
    const el = document.createElement('a')
    el.className = className
    el.href = to
    el.innerText = text
    return el
}

export const Image = (src, title, className = '') => {
    const el = document.createElement('img')
    el.src = src
    el.className = className
    el.alt = title
    el.title = title
    return el
}

export const Form = (method = 'GET') => {
    const el = document.createElement('form')
    el.method = method
    return el
}

export const Label = (title, id, className = '') => {
    const el = document.createElement('label')
    el.htmlFor = id
    el.innerHTML = title
    el.className = className
    return el
}

export const Input = (name, placeholder, type = 'text', value = '', className = '') => {
    const el = document.createElement('input')
    el.type = type
    el.id = name
    el.name = name
    el.placeholder = placeholder
    el.value = value
    el.className = className
    el.autocomplete = true
    el.required = true
    return el
}

export const Button = (title, type = 'submit', className = '') => {
    const el = document.createElement('button')
    el.type = type
    el.textContent = title
    el.className = className
    return el
}
import { PriceToDkk } from "../../utils/index.js"
import { Button, Div, Form, Fragment, Heading, Image, Input, Link, Paragraph } from "../atoms/index.js"

export const ProductListView = (products, category) => {
    const el = Fragment()

    products.forEach(product => {
        const { imageUrl, name, price, slug, stockText, stockClass, teaser } = product

        const linkBox = Link(`?category=${category}&product=${slug}`, '', 'block mb-4 p-4 border rounded flex justify-between items-center')
        
        const imgCol = Div('pr-4')
        const img = Image(`http://localhost:4000${imageUrl}`, name, 'max-w-[200px]')
        img.loading = 'lazy'
        imgCol.appendChild(img)

        const infoCol = Div('flex-1 min-w-0')
        const h2 = Heading(name, 2)
        const p = Paragraph()
        p.innerHTML = teaser
        infoCol.append(h2, p)

        const priceCol = Div('shrink-0 w-[200px] text-right')
        const priceText = Paragraph('text-xl font-bold')
        priceText.textContent = PriceToDkk(price)
        const stockTxt = Paragraph(stockClass)
        stockTxt.textContent = stockText
        priceCol.append(priceText, stockTxt)

        linkBox.append(imgCol, infoCol, priceCol)
        el.appendChild(linkBox)
    })
    return el
}

export const ProductDetailsView = product => {
    const { imageUrl, id, name, description, price } = product
    const el = Div('flex gap-4 p-4 border rounded-lg')

    // Image column (left)
    const imgCol = Div('shrink-0 w-[300px]')
    const img = Image(`http://localhost:4000${imageUrl}`, name, 'w-[90%] flex-shrink-0 rounded')
    img.loading = 'lazy'
    imgCol.append(img)

    // Info column (center)
    const infoCol = Div('flex-1 min-w-0')
    const h3 = Heading(name, 1, 'font-bold mb-2')
    infoCol.append(h3)

    const p = Paragraph()
    p.innerHTML = description
    infoCol.append(p)
    
    // Style any lists in the description
    infoCol.querySelectorAll('ul').forEach(ul => {
        ul.className = 'list-disc pl-6 mt-2'
    })

    // Right column (price + quantity + add to cart) aligned to bottom-right
    const rightCol = Div('shrink-0 w-[260px] flex flex-col justify-end items-end gap-3')

    const priceEl = Paragraph('text-2xl font-bold')
    priceEl.textContent = PriceToDkk(price)

    const form = Form('POST')
    form.className = 'flex items-center gap-2'
    const productId = Input('productId', '', 'hidden', id)
    const quantity = Input('quantity', '', 'number', 1, 'border rounded-md w-12 text-center')
    const button = Button('Læg i kurv', 'submit', 'bg-green-600 rounded-md p-2 pl-4 pr-4 text-white')

    form.append(productId, quantity, button)

    rightCol.append(priceEl, form)

    el.append(imgCol, infoCol, rightCol)
    return el
}
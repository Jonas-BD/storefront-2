import { PriceToDkk } from "../../utils/index.js"
import { Button, Div, Form, Fragment, Heading, Image, Input, Link, Paragraph } from "../atoms/index.js"

export const ProductListView = (products, category) => {
    const el = Fragment()

    products.forEach(product => {
        const { imageUrl, name, price, slug, stockText, stockClass, teaser } = product

        const linkBox = Link(`?category=${category}&product=${slug}`, '', 'block mb-4 p-4 border rounded flex justify-between')
        
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
    const { imageUrl, id, name, description, price} = product

    const el = Div('flex justify-between gap-4 p-4 border rounded-lg')

    const imgCol = Div('shrink-0 w-[300px]')
    const img = Image(`http://localhost:4000${imageUrl}`, name, 'w-[90%] flex-shrink-0 rounded')
    imgCol.append(img)

    const infoCol = Div('flex-1 min-w-0')
    const h3 = Heading(name, 1, 'font-bold mb-2')
    infoCol.append(h3)

    const p = Paragraph()
    p.innerHTML = description
    infoCol.append(p)

    const form = Form('POST')
    const productId = Input('productId', '', 'hidden', id)
    const quantity = Input('quantity', '', 'number', 1)
    const button = Button('Læg i kurv', 'submit')

    form.append(productId, quantity, button)
    infoCol.append(form)

    const priceCol = Div('text-2xl')
    priceCol.textContent = PriceToDkk(price)

    el.append(imgCol, infoCol, priceCol)
    return el
}
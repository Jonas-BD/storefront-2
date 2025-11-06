import { getDetails, getList } from "../models/productModel.js"
import { isLoggedIn } from "../services/auth.js"
import { ProductDetailsView, ProductListView } from "../views/organisms/productViews.js"
import { Layout } from "./layoutController.js"

export const ProductPage = async () => {
    isLoggedIn()

    const { category = 'vand-og-vandrensning', product } = Object.fromEntries(new URLSearchParams(location.search))
    let html = ''

    if (!product) {
        html = ProductList()
    } else {
        html = ProductDetails(product)
    }

    return html
}

export const ProductList = async () => {
    const { category = 'vand-og-vandrensning' } = Object.fromEntries(new URLSearchParams(location.search))

    const data = await getList(category)

    const formattedProducts = data.map(item => ({
        ...item,
        stockText: item.stock ? `På lager` : 'Ikke på lager',
        stockClass: item.stock ? 'text-green-600' : 'text-red-600'
    }))

    const html = ProductListView(formattedProducts, category)

    const layout = Layout('Produkter', html)
    
    return layout
}

export const ProductDetails = async (product) => {
    const data = await getDetails(product)

    const html = ProductDetailsView(data)
    const form = html.querySelector('form')

    form.addEventListener('submit', (e) => {
        addToCartHandler(e)
    })

    const layout = Layout('', html)

    return layout
}

const addToCartHandler = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    const productId = form.productId.value
    const quantity = form.quantity.value

    console.log({ productId, quantity })

    // if (quantity && productId) {
    //     const data = await addToCart(productId, quantity)
    // }
}
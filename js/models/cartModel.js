import { request } from "../services/fetch.js"

const url = 'http://localhost:4000/api/cart'

export const getCartList = async () => {
    try {
        const data = await request(url)

        if (data) {
            return data
        }
    } catch (error) {
        console.error(`Fejl ved kald af indkøbskurv liste: ${error}`);
    }
}

export const addToCart = async (productId, quantity) => {
    try {
        const data = await request(url, 'POST', {
            productId, quantity
        })
        return data
    } catch (error) {
        console.error(`Fejl i addToCart: ${error}`);
    }
}

export const removeFromCart = async id => {
    try {
        const data = await request(`${url}/${id}`, 'DELETE')
        if (data.message) {
            location.reload()
        }
    } catch (error) {
        console.error(error)
    }
}
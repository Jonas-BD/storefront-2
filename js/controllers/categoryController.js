import { getList } from "../models/categoryModel.js"

export const getCategoryList = async () => {
    const url = new URL(window.location.href)

    const curCategory = url.searchParams.get('category') || 'vand-og-vandrensning'

    const data = await getList()

    const formattedCategories = data.map(item => ({
        slug: item.slug,
        title: item.title,
        url: `/index.htm?category=${item.slug}`,
        textColor: curCategory === item.slug
            ? 'border-2 rounded-full text-white'
            : 'text-white'
    }))
    
    return formattedCategories
}
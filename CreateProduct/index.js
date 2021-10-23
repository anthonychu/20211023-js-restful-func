const products = require('../products')

module.exports = async function (context, req) {
    const product = req.body
    product.id = Math.max(...products.map(p => p.id)) + 1
    products.push(product)
    context.res = {
        status: 201,
        headers: {
            "Location": `/api/products/${product.id}`
        }
    }
}
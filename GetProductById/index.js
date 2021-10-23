const products = require('../products')

module.exports = async function (context, req) {
    const product = products.find(p => p.id === parseInt(req.params.id))
    if (product) {
        context.res.json(product)
    } else {
        context.res = {
            status: 404,
            body: "Product not found"
        }
    }
}
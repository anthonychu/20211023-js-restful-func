const products = require('../products')

module.exports = async function (context, req) {
    context.res.json(products)
}
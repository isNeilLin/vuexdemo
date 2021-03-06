const _products = [
    {
        "id": 1,
        "title": "iPad 4 Mini",
        "price": 500.01,
        "inventory": 3
    },
    {
        "id": 2,
        "title": "H&M T-Shirt White",
        "price": 29.99,
        "inventory": 10
    },
    {
        "id": 3,
        "title": "Charli XCX - Sucker CD",
        "price": 10.99,
        "inventory": 5
    }
]

export default {
    getProducts (cb) {
        setTimeout(() => cb(_products),100)
    },
    buyProducts (products, cb, errorcb) {
        setTimeout(()=>{
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
            ? cb()
            : errorcb()
        },1000)
    }
}
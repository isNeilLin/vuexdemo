import shop from "../shop";
import * as type from "../types";

const state = {
    all: []
}

const getters = {
    allProducts: state => state.all
}

const actions = {
    getAllProducts({ commit }){
        shop.getProducts(products => {
            commit(type.RECEIVE_PRODUCTS, { products })
        })
    }
}

const mutations = {
    [type.RECEIVE_PRODUCTS] (state, { products }) {
        state.all = products
    },

    [type.ADD_TO_CART] (state, { id }) {
        state.all.find(p => p.id === id).inventory--
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
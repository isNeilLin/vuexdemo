import shop from "../shop";
import * as type from "../types";

const state = {
    added: [],
    checkoutStatus: null
}

const getters = {
    checkoutStatus: state => state.checkoutStatus
}

const actions = {
    checkout ({commit, state}, products) {
        const savedCartItems = [...state.added]
        commit(type.CHECKOUT_REQUEST)
        shop.buyProducts(
            products,
            () => commit(type.CHECKOUT_SUCCESS),
            () => commit(type.CHECKOUT_FAILURE, {savedCartItems})
        )
    }
}

const mutations = {
    [type.ADD_TO_CART] (state, { id }) {
        state.lastCheckout = null;
        const record = state.added.find(p=>p.id===id)
        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        }else {
            record.quantity++
        }
    },
     
    [type.CHECKOUT_REQUEST] (state) {
        state.added = [];
        state.checkoutStatus = null;
    },

    [type.CHECKOUT_SUCCESS] (state) {
        state.checkoutStatus = "successful"
    },

    [type.CHECKOUT_FAILURE] (state, { savedCartItems }) {
        state.added = savedCartItems;
        state.checkoutStatus = "failed"
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
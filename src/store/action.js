import * as type from "./types";

export const addToCart = ({commit}, product)=>{
    if (product.inventory > 0) {
        commit(type.ADD_TO_CART, {
            id: product.id
        })
    }
}
<template>
  <div class="cart">
      <h2>Your Cart</h2>
      <p v-show="!products.length">
          <i>Please add some products to cart.</i>
      </p>
      <ul>
          <li v-for="p in products">
              {{p.title}} - {{p.price}} x {{p.quantity}}
          </li>
      </ul>
      <p>Total: {{total}}</p>
    <p><button
        class="checkout"
        :disabled="!products.length"
        @click="checkout(products)"
        >Checkout</button>
    </p>
    <p v-show="checkoutStatus">Checkout {{checkoutStatus}}.</p>
  </div>
</template>
<script>
    import { mapGetters } from "vuex"

    export default {
        computed: {
            ...mapGetters({
                products: 'cartProducts',
                checkoutStatus: 'checkoutStatus'
            }),
            total(){
                return this.products.reduce((total,p)=>{
                    return total + parseFloat(p.price * p.quantity).toFixed(2)
                },0)
            }
        },
        methods: {
            checkout (products) {
                this.$store.dispatch('checkout',products)
            }
        }
    }
</script>
<style>
.checkout {
    background: #5cb85c;
}
.checkout:hover {
    background: #449d44;
}
</style>

<template>
  <ul>
      <li v-for="p in products">
          {{p.title}} - 
          <span class="price">{{p.price}}$</span>
          <strong>{{p.inventory}} Left</strong>
          <br>
          <button
            :disabled = "!p.inventory"
            @click="addToCart(p)"
          >Add To Cart</button>
      </li>
  </ul>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    
    export default {
      computed: mapGetters({
        products: 'allProducts'
      }),
      methods: mapActions([
        'addToCart'
      ]),
      created () {
        this.$store.dispatch('getAllProducts')
      }
    }
</script>
<style>
.price {
  color: #af5b5e;
}
strong {
  float: right;
}
</style>

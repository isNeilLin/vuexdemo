<template>
  <div>
      <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <product-list></product-list>
        <hr>
        <cart></cart>
  </div>
</template>
<script>
    import ProductList from './ProductList.vue'
    import Cart from './Cart.vue'
    export default {
        components: { ProductList, Cart }
    }
</script>
<style>
button {
    padding: 5px;
    margin: 10px 0;
    border-radius: 10px;
    background: #0275d8;;
    color: #fff;
    font-weight: 400;
}
button:hover {
    background: #025aa5;
}
button:disabled {
    opacity: 0.5;
}
</style>


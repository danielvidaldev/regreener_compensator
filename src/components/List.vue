<template>
    <div class="list-wrapper">
        <h5>Added trips</h5>
        <ul>
            <template v-if="store.trips.value.length > 0">
                <ListItem v-for="trip in store.trips.value" :key="trip.id" :trip="trip"></ListItem>
            </template>
        </ul>
        <div class="container">
            <div class="checkout">
                <p> {{ store.trips.value.length > 0 ? `${store.totalPrice.value} €`: '0 €' }}</p> <Cart />
            </div>
        </div>
    </div>
</template>

<script setup>
  import store from '../store';
  import ListItem from './ListItem.vue';
  import Cart from './icons/Cart.vue';

</script>

<style scoped lang="scss">
  .list-wrapper {
    background-color: #EDF9F6;
    padding: 2rem;
    border-radius: 1rem;

    h5 {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 0.5rem;
        text-transform: uppercase;
        margin: 0 0 1.5rem 0;
    }

    ul {
        min-height: 20rem;
        max-height: 20rem;
        border-radius: 1rem;
        padding: 1rem;
        overflow: auto;
        margin-bottom: 2.5rem;
    }

    .container {
        flex: 1;
        position: relative;
        .checkout {
            display: flex;
            flex: 1;
            position: absolute;
            bottom: 0;
            right: 0;
            max-width: 100%;
            align-items: center;
            cursor: pointer;

            p {
                font-weight: 800;
                font-size: 1.6rem;
                line-height: 0.5rem;
                margin: 0 1rem 0 0;
                color: #02A79D;
            }
        }

        .checkout:hover {
            opacity: 0.8;
        }
    }
  }

  @media (max-width: 768px) {

  }
</style>
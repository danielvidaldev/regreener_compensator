<template>
    <li class="item">
        <div class="trip">
            <p>{{ trip.departure }} to {{ trip.arrival }}</p>
        </div>
        <p class="content">{{ trip.type }}</p>
        <p class="content">Amount x{{ trip.amount }}</p>
        <p class="content">{{ trip.distance }}</p>
        <Bin class="bin" @click="store.deleteTrip(trip.id)"/>
    </li>
</template>

<script setup>
    import store from '../store';

    import Bin from './icons/Bin.vue';

    const props = defineProps({
        trip: {
            type: Object,
        }
    });
</script>

<style scoped lang="scss">
.item {
    margin-bottom: 1.2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #222a3d;
    position: relative;

    p {
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: #222a3d;
        margin: 0;
    }

    .content {
        font-weight: 500;
    }
    .trip {
        font-weight: 800;
    }
    .bin {
        color: tomato;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    .bin:hover {
        opacity: 0.8;
    }

}
</style>
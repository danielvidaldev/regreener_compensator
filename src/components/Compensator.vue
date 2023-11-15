<template>
    <div class="main-wrapper">
      <div class="checkbox-wrapper">
        <div class="checkbox">
          <input type="radio" name="trip-type" :value="true" id="roundtrip" v-model="store.roundtrip.value" checked>
          <label for="roundtrip">
              Roundtrip
          </label>
        </div>
        <div class="checkbox">
          <input type="radio" name="trip-type" :value="false" id="oneway" v-model="store.roundtrip.value">
          <label for="oneway">
              One-way
          </label>
        </div>
      </div>
      <div class="selects-wrapper">
        <label for="departure">Departure airport</label>
        <select id="departure" v-model="store.departure.value">
          <option v-for="option in state.airports" :key="option.iata_code" :value="option"> {{ option.city }} ({{ option.iata_code }}) </option>
        </select>
        <label for="arrival">Arrival airport</label>
        <select id="arrival" v-model="store.arrival.value">
          <option v-for="option in state.airports" :key="option.iata_code" :value="option"> {{ option.city }} ({{ option.iata_code }}) </option>
        </select>
      </div>
      <div class="amount-wrapper">
        <div class="input-wrapper">
            <label for="amount">Amount</label>
            <input type="number" id="amount" name="amount" v-model="store.amount.value" placeholder="Number">
        </div>
        <div class="tickets-wrapper">
          <label for="type">Ticket class</label>
          <select id="type" v-model="store.type.value">
            <option v-for="(option, index) in state.classes" :key="index" :value="option"> {{ option }} </option>
          </select>
        </div>
      </div>
      <Button class="button" @click="store.addTrip">CONFIRM</Button>
      <div class="error" v-if="store.error.value === true">
        <p>Please fill in all fields</p>
      </div>
    </div>
</template>

<script setup>
  import store from '../store';
  import Button from './Button.vue';

  const state = store.state

</script>

<style scoped lang="scss">
  .main-wrapper {
    background-color: #1C6363;
    padding: 2rem;
    border-radius: 1rem;

    .checkbox-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 1.3rem;

      .checkbox {
        display: flex;
        white-space: nowrap;
        align-items: center;

        label {
          margin-bottom: 0;
        }

        input {
          margin-right: 1rem;
          margin-bottom: 3px;
        }
      }
      .checkbox:first-of-type {
        margin-right: 2rem;
      }
    }

    label {
        margin-bottom: 0.5rem;
        color: white;
        font-weight: 600;
        font-size: 1rem;
    }

    select {
        border-radius: 1rem;
        padding: 0.8rem;
        outline-color: #02A79D;
        border: 0;
        font-weight: 600;
        font-size: 1rem;
    }

    input {
        border-radius: 1rem;
        padding: 0.8rem;
        outline-color: #02A79D;
        border: 0;
        font-weight: 600;
        font-size: 1rem;
        width: 100%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    .selects-wrapper {
      select {
        margin-bottom: 1.3rem;
      }
    }

    .selects-wrapper, .tickets-wrapper, .input-wrapper {
        display: flex;
        flex-direction: column;
    }

    .amount-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 1.8rem;
    } 

    .button {
      width: 100%;
      cursor: pointer;
    }

    .error {
      p {
        color:tomato;
        font-weight: 600;
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    .main-wrapper  {
      padding: 2rem;
    }
  }
</style>

import { ref } from 'vue';
import airportsJson from './airports.json'

const state = ref({
    airports: airportsJson,
    classes: ['Tourist', 'Comfort', '1st class'],
})

const roundtrip = ref(true)
const departure = ref (null)
const arrival = ref (null)
const amount = ref (null)
const type = ref (null)
const error = ref (false)

const totalPrice = ref(0);

const trips = ref([])

const calcTotalPrice = () => {
    const totalDistance = trips.value.reduce((total, trip) => {
      return total + parseFloat(trip.distance);
    }, 0);
    totalPrice.value = totalDistance.toFixed(2);
};

const addTrip = () => {

    if (arrival.value == null || departure.value == null || amount.value === null || type.value == null ) {
        error.value = true;
        return;
    } else {
        error.value = false;
        const calcRoundTrip = roundtrip.value == true ? 2 : 1;
        const calcDistance =
            (departure.value._geoloc.lat % arrival.value._geoloc.lat) +
            (departure.value._geoloc.lng % arrival.value._geoloc.lng);     
        const distance = 
            type.value === 'comfort' ? Math.abs((calcDistance * 1.5 * amount.value * calcRoundTrip).toFixed(2)) 
            : type.value === '1st class' ? Math.abs((calcDistance * 2 * amount.value * calcRoundTrip).toFixed(2)) 
            : Math.abs((calcDistance * amount.value * calcRoundTrip).toFixed(2));
        trips.value.push({
            roundtrip: roundtrip.value,
            departure: departure.value.city,
            arrival: arrival.value.city,
            amount: amount.value,
            type: type.value,
            distance: distance,
            id: Date.now()
        });
        calcTotalPrice();

        roundtrip.value = null;
        departure.value = null;
        arrival.value = null;
        amount.value = null;
        type.value = null;
    }
};

const deleteTrip = (tripId) => {
    const indexToDelete = trips.value.findIndex((trip) => trip.id === tripId);
  
    if (indexToDelete !== -1) {
      trips.value.splice(indexToDelete, 1);

      calcTotalPrice();
    }
};

export default {
    state,
    trips,
    roundtrip,
    departure,
    arrival,
    amount,
    type,
    addTrip,
    error,
    totalPrice,
    deleteTrip,
}
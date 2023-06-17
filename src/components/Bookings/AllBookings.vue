<template>
  <div class="allBookingsContainer" v-if="bookedHotels.length">
    <div class="bookingContainer" v-for="hotel in bookedHotels" :key="hotel.id">
      <singleBookingVue :hotel="hotel" />
    </div>
  </div>

  <div v-else>
    <MessageVue>
      <p>Sorry, You Have No Bookings</p>
    </MessageVue>
  </div>
</template>

<script>
import getHotels from "@/composables/getHotels";
import { ref } from "vue";
import singleBookingVue from "../Bookings/singleBooking.vue";
import MessageVue from "../Utils/Message.vue";

export default {
  components: {
    singleBookingVue,
    MessageVue,
  },
  setup() {
    let bookedHotels = ref([]);

    let getBookedHotels = async () => {
      let { allHotels, loadHotels } = getHotels();
      await loadHotels();
      bookedHotels.value = allHotels.value.filter(
        (hotel) => hotel.booked == true
      );

      console.log(bookedHotels.value.length);
    };

    getBookedHotels();

    return { bookedHotels };
  },
};
</script>

<style scoped>
.allBookingsContainer {
  margin: 10vh 5vw;
}

.bookingContainer {
  border: 1px solid gray;
  width: 100%;
  height: 30vh;
  min-width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  margin-bottom: 5vh;
}

@media (max-width: 700px) {
  .hotelName {
    font-size: 15px;
  }

  .deleteBtn {
    font-size: 18px;
  }
}

@media (max-width: 600px) {
  .bookingContainer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 5vh 0;
  }
}
</style>

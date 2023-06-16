<template>
  <div class="allBookingsContainer">
    <div class="bookingContainer" v-for="hotel in bookedHotels" :key="hotel.id">
      <div class="hotelDetailsContainer">
        <div class="imgContainer">
          <img :src="hotel.image" :alt="hotel.name" />
        </div>

        <div class="hotelDetails">
          <div class="nameRatingContainer">
            <h1 class="hotelName">{{ hotel.name }}</h1>
            <div class="rating">
              <span v-for="i in 5" :key="i">
                <i
                  :class="
                    i <= hotel.rating ? 'fa fa-star active' : 'fa fa-star'
                  "
                ></i>
              </span>
            </div>
          </div>
          <p class="addressContainer">
            <i class="fa-solid fa-location-dot"></i>
            <span class="location"> {{ hotel.address }} </span>
          </p>
        </div>
      </div>

      <div class="actionsContainer">
        <button class="deleteBtn" :hotelID="hotel.id" @click="cancelBooking">
          Cancel Booking
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import getHotels from "@/composables/getHotels";
import { ref } from "vue";
import setBooking from "@/composables/setBooking";
import { useRouter } from "vue-router";

export default {
  setup() {
    let bookedHotels = ref([]);
    let { setBookingStatus } = setBooking();
    let router = useRouter();

    let getBookedHotels = async () => {
      let { allHotels, loadHotels } = getHotels();
      await loadHotels();
      bookedHotels.value = allHotels.value.filter(
        (hotel) => hotel.booked == true
      );
    };

    getBookedHotels();

    function cancelBooking(e) {
      let hotelID = e.target.getAttribute("hotelid");

      setBookingStatus(hotelID, false);
      router.go();
    }

    return { bookedHotels, cancelBooking };
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

.hotelDetailsContainer {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
}

.imgContainer {
  height: 100%;
  width: 40%;
}

.addressContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hotelDetails {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0px;
  height: 100%;
}

.deleteBtn {
  border: none;
  outline: none;
  font-size: 20px;
  padding: 0.7em;
  background-color: #dc3545;
  border-radius: 0.3em;
  color: white;
  cursor: pointer;
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
  .hotelDetailsContainer {
    flex-direction: column;
    width: 100%;
  }

  .imgContainer {
    width: 80%;
    height: 30vh;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .hotelDetails {
    margin-left: 0px;
    text-align: center;
  }

  .bookingContainer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 5vh 0;
  }
}
</style>

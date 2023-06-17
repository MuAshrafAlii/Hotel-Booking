<template>
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
              :class="i <= hotel.rating ? 'fa fa-star active' : 'fa fa-star'"
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
</template>

<script>
import setBooking from "@/composables/setBooking";
import { useRouter } from "vue-router";
export default {
  props: {
    hotel: {
      type: Array,
      required: true,
    },
  },
  setup() {
    let { setBookingStatus } = setBooking();
    let router = useRouter();

    function cancelBooking(e) {
      let hotelID = e.target.getAttribute("hotelid");

      setBookingStatus(hotelID, false);
      router.go();
    }
  },
};
</script>

<style>
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
}
</style>

<template>
  <div class="allHotelsContainer">
    <div class="hotelContainer" v-for="hotel in allHotels" :key="hotel.id">
      <div class="imgContainer">
        <img :src="hotel.image" alt="Hotel" />
      </div>

      <div class="titleRatingContainer">
        <h1 class="hotelName">{{ hotel.name }}</h1>
        <div class="rating">
          <span v-for="i in 5" :key="i">
            <i
              :class="i <= hotel.rating ? 'fa fa-star active' : 'fa fa-star'"
            ></i>
          </span>
        </div>
      </div>

      <div class="detailsContainer">
        <p class="addressContainer">
          <i class="fa-solid fa-location-dot"></i>
          <span class="location">
            {{ hotel.address }}
          </span>
        </p>

        <router-link :to="{ name: 'bookingForm', params: { id: hotel.id } }"
          ><button class="bookBtn">Book Now</button></router-link
        >
      </div>
    </div>
  </div>

  <div></div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const allHotels = ref([]);

    const loadHotels = async () => {
      try {
        let allHotelsResponse = await fetch("http://localhost:3000/hotels");
        if (!allHotelsResponse.ok) {
          throw Error("No Hotels Available");
        }
        allHotels.value = await allHotelsResponse.json();
      } catch (err) {
        console.log(err.message);
      }
    };

    loadHotels();

    return { allHotels };
  },
};
</script>

<style scoped>
.allHotelsContainer {
  padding: 5vh 2vw;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.hotelContainer {
  width: 400px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  position: relative;
  margin-bottom: 5vh;
}

.imgContainer {
  width: 100%;
  height: 70%;
  border-radius: 15px 15px 0 0;
}

.titleRatingContainer {
  position: absolute;
  top: 10px;
  left: 10px;
}

.titleRatingContainer > .hotelName {
  color: white;
  text-shadow: 1px 1px 1px black;
}

.detailsContainer {
  height: 90px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.addressContainer {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.location {
  margin-left: 5px;
  font-size: 15px;
}

.detailsContainer .bookBtn {
  border: none;
  outline: none;
  background: #198754;
  color: white;
  font-weight: 800;
  cursor: pointer;
  border-radius: 10%;
  padding: 1em;
  font-size: 15px;
}
</style>

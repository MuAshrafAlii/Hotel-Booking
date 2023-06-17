<template>
  <div class="allHotelsContainer" v-if="allHotels.length">
    <div class="hotelContainer" v-for="hotel in allHotels" :key="hotel.id">
      <HotelVue :hotel="hotel" />
    </div>
  </div>

  <div v-else>
    <MessageVue>
      <p>Sorry, No Hotels Found</p>
    </MessageVue>
  </div>

  <LoaderVue v-if="loading" />
</template>

<script>
import { ref } from "vue";
import getHotels from "../../composables/getHotels.js";

import HotelVue from "../Hotels/Hotel.vue";
import LoaderVue from "../Utils/Loader.vue";
import MessageVue from "../Utils/Message.vue";

export default {
  components: {
    HotelVue,
    MessageVue,
    LoaderVue,
  },
  setup() {
    let { allHotels, loadHotels } = getHotels();
    let loading = ref(true);

    let getHotelsAfterLoading = async () => {
      await loadHotels();
      loading.value = false;
    };

    getHotelsAfterLoading();
    return { allHotels, loading };
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
</style>

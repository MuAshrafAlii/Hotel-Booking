<template>
  <div class="headerContainer" @scroll="navScrollHandler">
    <navBarVue />

    <div class="title">
      <h1>Welcome to HotelPro</h1>
    </div>
  </div>
</template>

<script>
import navBarVue from "../Header/navBar.vue";

export default {
  components: {
    navBarVue,
  },
};
</script>

<style scoped>
.headerContainer {
  height: 80vh;
  background-image: url("/public/imgs/hotelBkgr.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 40px;
  letter-spacing: 20;
  color: white;
  text-shadow: 3px 3px 3px black;
}

@media (max-width: 800px) {
  .title {
    font-size: 30px;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 15px;
  }
}
</style>

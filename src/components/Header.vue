<template>
  <div class="headerContainer" @scroll="navScrollHandler">
    <div class="navContainer" ref="navContainer">
      <div class="logoContainer">
        <router-link to="/" class="title"
          ><img src="/imgs/logo.png" alt=""
        /></router-link>
      </div>

      <nav>
        <router-link to="/">All Hotels</router-link>
        <router-link to="/all-bookings">All Bookings</router-link>
      </nav>
    </div>

    <div class="title">
      <h1>Welcome to HotelPro</h1>
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from "vue";

export default {
  setup() {
    const navContainer = ref(null);

    const navScrollHandler = (e) => {
      if (window.scrollY > 150) {
        navContainer.value.classList.add("scrolled");
      } else {
        navContainer.value.classList.remove("scrolled");
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", navScrollHandler);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", navScrollHandler);
    });

    return { navContainer, navScrollHandler };
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

.navContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  position: fixed;
  top: 0px;
  z-index: 20;
  width: 100%;
  transition: all 0.3s;
  padding: 0px 10vw;
  box-sizing: border-box;
}

.logoContainer {
  width: 10%;
  height: 100%;
}

.logoContainer img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

nav > a {
  background: white;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  border-radius: 10%;
  color: black;
  cursor: pointer;
  transition: all 0.3s;
}

.navContainer.scrolled {
  background-color: white;
  transition: all 0.3s;
}

.navContainer.scrolled > nav > a {
  color: white;
  background: #0f526d;
  transition: all 0.3s;
}

nav > a:last-child {
  margin-left: 10px;
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

  nav > a {
    font-size: 15px;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 15px;
  }

  .logoContainer {
    width: 25%;
  }

  nav > a {
    font-size: 10px;
  }
}
</style>

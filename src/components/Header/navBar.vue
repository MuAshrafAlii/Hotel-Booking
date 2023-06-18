<template>
  <div class="navContainer" ref="navContainer">
    <div class="logoContainer">
      <router-link :to="{ name: 'home' }" class="title"
        ><img src="/imgs/logo.png" alt="HotelPro"
      /></router-link>
    </div>

    <nav>
      <router-link :to="{ name: 'home' }" active-class="active-link"
        >All Hotels</router-link
      >
      <router-link :to="{ name: 'allBookings' }" active-class="active-link"
        >All Bookings</router-link
      >
    </nav>
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
  min-height: 80px;
}

.navContainer.scrolled {
  background-color: white;
  transition: all 0.3s;
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

.navContainer.scrolled nav > a {
  color: black;
  border: 1px black solid;
  transition: all 0.3s;
}

nav > a:last-child {
  margin-left: 10px;
}

.navContainer.scrolled nav > a.active-link {
  color: white;
  background: #0f526d;
}

@media (max-width: 800px) {
  nav > a {
    font-size: 15px;
  }
}

@media (max-width: 600px) {
  .logoContainer {
    width: 25%;
  }

  nav > a {
    font-size: 10px;
  }
}
</style>

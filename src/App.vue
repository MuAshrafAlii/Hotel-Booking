<template>
  <HeaderVue />
  <router-view />
  <FooterVue />
</template>

<script>
import FooterVue from "./components/Footer.vue";
import HeaderVue from "./components/Header/Header.vue";

export default {
  components: {
    HeaderVue,
    FooterVue,
  },
};
</script>

<style></style>

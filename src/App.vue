<template>
  <!-- <LoaderVue /> -->
  <HeaderVue />
  <router-view />
  <FooterVue />
</template>

<script>
import FooterVue from "./components/Footer.vue";
import HeaderVue from "./components/Header.vue";
import LoaderVue from "./components/Loader.vue";

export default {
  components: {
    HeaderVue,
    FooterVue,
    LoaderVue,
  },
};
</script>

<style></style>

<template>
  <HeaderVue />
  <div class="content">
    <router-view />
  </div>
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

<style scoped>
.content {
  position: relative;
}
</style>

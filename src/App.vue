<template>
  <LoaderVue v-if="loading" />
  <HeaderVue />
  <router-view />
  <FooterVue />
</template>

<script>
import { onMounted } from "vue";
import FooterVue from "./components/Footer.vue";
import HeaderVue from "./components/Header.vue";
import LoaderVue from "./components/Loader.vue";

export default {
  components: {
    HeaderVue,
    FooterVue,
    LoaderVue,
  },

  setup() {
    let loading = true;
    console.log(loading);

    onMounted(() => {
      loading = false;
      console.log(loading);
    });
  },
};
</script>

<style></style>

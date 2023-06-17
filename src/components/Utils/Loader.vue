<template>
  <div class="loaderContainer">
    <div class="loaderImgContainer">
      <img src="/imgs/loader.gif" alt="loader" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loaderContainer {
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 30;
}

.loaderImgContainer {
  width: 80%;
  height: 80%;
}
.loaderImgContainer img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

<template>
  <div class="notFoundContainer">
    <h1>Page not found</h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
.notFoundContainer {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.notFoundContainer * {
  font-size: 50px;
  text-transform: uppercase;
}

@media (max-width: 700px) {
  .notFoundContainer * {
    font-size: 30px;
  }
}

@media (max-width: 550px) {
  .notFoundContainer * {
    font-size: 20px;
  }
}
</style>

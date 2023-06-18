<template>
  <div class="Container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Container {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.Container * {
  font-size: 50px;
  text-transform: uppercase;
}

@media (max-width: 700px) {
  .Container * {
    font-size: 30px;
  }
}

@media (max-width: 550px) {
  .Container * {
    font-size: 20px;
  }
}
</style>

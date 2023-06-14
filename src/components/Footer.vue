<template>
  <div class="footerContainer">
    <p>Made with <span>&hearts; </span> by <span>Muhammad Ashraf</span></p>
  </div>
</template>

<style scoped>
.footerContainer {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f526d;
  color: white;
  font-size: 30px;
  padding: 1em 0;
}

span:first-child {
  color: red;
}

@media (max-width: 800px) {
  .footerContainer {
    font-size: 25px;
  }
}

@media (max-width: 600px) {
  .footerContainer {
    font-size: 15px;
  }
}
</style>

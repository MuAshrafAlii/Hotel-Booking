<template>
  <div class="footerContainer">
    <p>Made with <span>&hearts; </span> by <span>Muhammad Ashraf</span></p>
    <small>Task For Flojics Technology</small>
  </div>
</template>

<style scoped>
.footerContainer {
  width: 100%;
  min-height: 14vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f526d;
  color: white;
  font-size: 30px;
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

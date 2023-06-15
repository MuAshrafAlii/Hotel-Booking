<template>
  <div class="bookingContainer">
    <div class="imgContainer">
      <img src="/imgs/hotelbkgr.jpg" alt="Hotel Image" />
    </div>

    <div class="formContainer">
      <form method="post">
        <div class="formControl">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Please Enter your name"
          />
          <small class="error">Hi i am error</small>
        </div>

        <div class="formControl">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please Enter your email"
          />
          <small class="error">Hi i am error</small>
        </div>

        <div class="formControl">
          <label for="phone">Phone Number</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Please Enter your phone"
          />
          <small class="error">Hi i am error</small>
        </div>

        <button>Book</button>
      </form>
    </div>
  </div>

  <div class="thankYouContainer" v-if="false">
    <h1>Thank You For Booking with us</h1>
    <i class="fa-solid fa-check"></i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bookingContainer {
  width: 60%;
  margin: 5vh auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding-bottom: 30px;
}

.imgContainer {
  width: 100%;
  height: 15vh;
  border-radius: 15px 15px 0 0;
}

.formContainer {
  margin: 10px;
}

form {
  width: 100%;
}

.formControl {
  margin-bottom: 10px;
}

.formControl label {
  font-weight: 500;
}

input {
  width: 100%;
  font-size: 20px;
  padding: 1em;
  border: none;
  border-bottom: 1px black solid;
  margin-bottom: 5px;
}

input:focus {
  border-bottom: 5px black solid;
}

.error {
  color: #8b0000;
}

input {
  display: block;
}

button {
  width: 50%;
  font-size: 40px;
  padding: 0.5em;
  margin: 0px auto;
  border: none;
  outline: none;
  background: #198754;
  color: white;
  font-weight: 800;
  cursor: pointer;
  border-radius: 0.3em;
  display: block;
}

.thankYouContainer {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.thankYouContainer * {
  font-size: 50px;
}

.thankYouContainer i {
  color: green;
}

@media (max-width: 700px) {
  .thankYouContainer * {
    font-size: 30px;
  }
}

@media (max-width: 550px) {
  .bookingContainer {
    width: 80%;
  }
  label {
    font-size: 12px;
  }

  input {
    font-size: 13px;
  }
  button {
    font-size: 20px;
  }

  .error {
    font-size: 10px;
  }

  .thankYouContainer * {
    font-size: 20px;
  }
}
</style>

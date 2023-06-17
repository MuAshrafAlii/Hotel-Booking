<template>
  <div class="bookingContainer" v-if="!formSubmitted">
    <div class="imgContainer">
      <img
        src="https://images.unsplash.com/photo-1528076225979-12893c7d55e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1391&q=80"
        alt="Hotel Image"
      />
    </div>

    <div class="formContainer">
      <form @submit.prevent="bookHotel">
        <div class="formControl">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Please Enter your name"
            v-model.trim="userName"
            @blur="validateUserName"
            :class="{ invalid: userNameError }"
          />
          <small class="error" v-if="userNameError">{{
            userNameErrorText
          }}</small>
        </div>

        <div class="formControl">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please Enter your email"
            v-model.trim="email"
            @blur="validateEmail"
            :class="{ invalid: emailError }"
          />
          <small class="error" v-if="emailError">{{ emailErrorText }}</small>
        </div>

        <div class="formControl">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Please Enter your phone"
            v-model.trim="phone"
            @blur="validatePhone"
            :class="{ invalid: phoneError }"
          />
          <small class="error" v-if="phoneError">{{ phoneErrorText }}</small>
        </div>

        <button type="submit">Book</button>
      </form>
    </div>
  </div>

  <div class="thankYouContainer" v-else>
    <MessageVue>
      <h1>Thank You For Booking with us</h1>
      <p>Wait to be redirected</p>
      <i class="fa-solid fa-check"></i>
    </MessageVue>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import setBooking from "../composables/setBooking";
import MessageVue from "./Utils/Message.vue";

export default {
  components: {
    MessageVue,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    let { setBookingStatus } = setBooking();
    const id = computed(() => {
      return route.params.id;
    });

    const formSubmitted = ref(true);

    let userName = ref(null);
    let email = ref(null);
    let phone = ref(null);

    let userNameError = ref(false);
    let userNameErrorText = ref(null);
    let emailError = ref(false);
    let emailErrorText = ref(null);
    let phoneError = ref(false);
    let phoneErrorText = ref(null);

    function validateUserName() {
      let userNameToCheck = userName.value;
      let userNameRegEx = /^[A-z]+$/;

      if (userNameToCheck == null || userNameToCheck == "") {
        userNameError.value = true;
        userNameErrorText.value = "Your Name can't be empty";
        return;
      }

      if (!userNameRegEx.test(userNameToCheck)) {
        userNameError.value = true;
        userNameErrorText.value = "Your Name must be characters only";
        return;
      }

      if (userNameToCheck.length < 5 || userNameToCheck.length > 20) {
        userNameError.value = true;
        userNameErrorText.value =
          "Your Name must be between 5 and 20 characters";
        return;
      }

      userNameError.value = false;
    }

    function validateEmail() {
      let emailToCheck = email.value;
      let emailRegEx = /^[A-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

      if (emailToCheck == null || emailToCheck == "") {
        emailError.value = true;
        emailErrorText.value = "Your Email can't be empty";
        return;
      }

      if (!emailRegEx.test(emailToCheck)) {
        emailError.value = true;
        emailErrorText.value = "Please Enter a valid email";
        return;
      }

      emailError.value = false;
    }

    function validatePhone() {
      let phoneToCheck = phone.value;
      let phoneRegEx = /^01[0-9]{9}$/;

      if (phoneToCheck == null || phoneToCheck == "") {
        phoneError.value = true;
        phoneErrorText.value = "Your Phone Number can't be empty";
        return;
      }

      if (!phoneRegEx.test(phoneToCheck)) {
        phoneError.value = true;
        phoneErrorText.value =
          "Please Enter a valid phone number (01xxxxxxxxx)";
        return;
      }

      phoneError.value = false;
    }

    let bookHotel = async () => {
      validateUserName();
      validateEmail();
      validatePhone();

      if (!userNameError.value && !emailError.value && !phoneError.value) {
        await setBookingStatus(id.value, true);

        userName.value = "";
        email.value = "";
        phone.value = "";
        formSubmitted.value = true;

        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    };

    onMounted(() => {
      formSubmitted.value = false;
    });

    return {
      userName,
      email,
      phone,
      bookHotel,
      userNameError,
      userNameErrorText,
      emailError,
      emailErrorText,
      phoneError,
      phoneErrorText,
      formSubmitted,
      validateUserName,
      validateEmail,
      validatePhone,
    };
  },
};
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

input.invalid {
  border: 1px solid #ac0000;
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

.thankYouContainer i {
  color: green;
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
}
</style>

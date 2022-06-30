<template>
  <div class="container">
    <div class="row py-5">
      <!-- Success Message -->
      <transition name="fade">
        <div v-if="submitted" class="col-lg-8 m-auto">
          <div class="h4 text-center mb-3">
            Thank you! Your request has been submitted.
          </div>
        </div>
      </transition>
      <!-- Error General -->
      <div
        v-if="errors.all"
        class="col-lg-8 m-auto error d-flex align-items-end justify-content-between"
      >
        <p class="mb-0">
          Something went wrong.
          <span v-if="errors.network">
            {{ errors.network }}
          </span>
          <span v-else> Please resolve the errors below. </span>
        </p>
        <span
          class="close d-flex align-items-center"
          @click="errors.all = false"
        >
          <b-icon-x scale="1.6"></b-icon-x>
        </span>
      </div>
      <!-- Form -->
      <transition name="fade">
        <div v-if="!submitted" class="col-lg-8 m-auto">
          <ValidationObserver ref="form">
            <form class="form row" @submit.prevent="handleForm">
             
              <!-- 1. Bot Url -->
              <div class="col-lg-12 mb-4">
                <ValidationProvider v-slot="{ errors }" rules="required">
                  <div
                    class="form__input"
                    :class="{ validationError: errors[0] }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      v-model="bot_url"
                      placeholder="Bot Url"
                    />
                    <span v-if="errors.length > 0" class="icon d-inline-flex">
                      <b-icon-exclamation-circle></b-icon-exclamation-circle>
                    </span>
                  </div>
                  <p v-if="errors.length > 0" class="validationMessage mt-2">
                    Error: Please enter a bot url
                  </p>
                </ValidationProvider>
              </div>

              <!-- 2. Number To -->
              <div class="col-lg-6 mb-4">
                <ValidationProvider v-slot="{ errors }" rules="required">
                  <div
                    class="form__input"
                    :class="{ validationError: errors[0] }"
                  >
                    <input
                      type="number"
                      class="form-control"
                      v-model="number_to"
                      placeholder="Number To"
                    />
                    <span v-if="errors.length > 0" class="icon d-inline-flex">
                      <b-icon-exclamation-circle></b-icon-exclamation-circle>
                    </span>
                  </div>
                  <p v-if="errors.length > 0" class="validationMessage mt-2">
                    Error: Please enter number to
                  </p>
                </ValidationProvider>
              </div>

              <!-- 3. Number From -->
              <div class="col-lg-6 mb-4">
                <ValidationProvider v-slot="{ errors }" rules="required">
                  <div
                    class="form__input"
                    :class="{ validationError: errors[0] }"
                  >
                    <input
                      type="number"
                      class="form-control"
                      v-model="number_from"
                      placeholder=" Number From"
                    />
                    <span v-if="errors.length > 0" class="icon d-inline-flex">
                      <b-icon-exclamation-circle></b-icon-exclamation-circle>
                    </span>
                  </div>
                  <p v-if="errors.length > 0" class="validationMessage mt-2">
                    Error: Please enter number from
                  </p>
                </ValidationProvider>
              </div>

              <!-- 4. Transaction ID -->
              <div class="col-lg-12 mb-4">
                <ValidationProvider v-slot="{ errors }" rules="required">
                  <div
                    class="form__input"
                    :class="{ validationError: errors[0] }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      v-model="transaction_id"
                      placeholder="Transaction ID"
                    />
                    <span v-if="errors.length > 0" class="icon d-inline-flex">
                      <b-icon-exclamation-circle></b-icon-exclamation-circle>
                    </span>
                  </div>
                  <p v-if="errors.length > 0" class="validationMessage mt-2">
                    Error: Please enter transaction id
                  </p>
                </ValidationProvider>
              </div>

              <!-- 5. Transfer Sip Address -->
              <div class="col-lg-12 mb-4">
                <ValidationProvider v-slot="{ errors }" rules="required">
                  <div
                    class="form__input"
                    :class="{ validationError: errors[0] }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      v-model="transfer_sip_addr"
                      placeholder="Transfer Sip Address"
                    />
                    <span v-if="errors.length > 0" class="icon d-inline-flex">
                      <b-icon-exclamation-circle></b-icon-exclamation-circle>
                    </span>
                  </div>
                  <p v-if="errors.length > 0" class="validationMessage mt-2">
                    Error: Please enter transfer sip address
                  </p>
                </ValidationProvider>
              </div>

              <!-- 6. Carrier GW -->
              <div class="col-lg-12 mb-4">
                <ValidationProvider v-slot="{ errors }" rules="required">
                  <div
                    class="form__input"
                    :class="{ validationError: errors[0] }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      v-model="carrier_gw"
                      placeholder="Carrier GW"
                    />
                    <span v-if="errors.length > 0" class="icon d-inline-flex">
                      <b-icon-exclamation-circle></b-icon-exclamation-circle>
                    </span>
                  </div>
                  <p v-if="errors.length > 0" class="validationMessage mt-2">
                    Error: Please enter carrier gw
                  </p>
                </ValidationProvider>
              </div>

              <!-- 7. File Url -->
              <div class="col-lg-12 mb-4">
                <ValidationProvider v-slot="{ errors }" rules="required">
                  <div
                    class="form__input"
                    :class="{ validationError: errors[0] }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      v-model="vm_drop_fileurl"
                      placeholder="File Url"
                    />
                    <span v-if="errors.length > 0" class="icon d-inline-flex">
                      <b-icon-exclamation-circle></b-icon-exclamation-circle>
                    </span>
                  </div>
                  <p v-if="errors.length > 0" class="validationMessage mt-2">
                    Error: Please enter file url
                  </p>
                </ValidationProvider>
              </div>
              <!-- Submit Button -->
              <div class="col-lg-12">
                <div class="d-flex mt-4">
                  <button class="mx-auto">Submit Form</button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { BIcon } from "bootstrap-vue";
export default {
  name: "IndexPage",
  components: {
    ValidationObserver,
    ValidationProvider,
    BIcon,
  },
  data: () => ({
    bot_url: "",
    number_to: "",
    number_from: "",
    transaction_id: "",
    transfer_sip_addr: "",
    carrier_gw: "",
    vm_drop_fileurl: "",
    submitted: false,
    errors: {
      all: false,
      network: "",
    },
  }),
  methods: {
    test() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        bot_url: "a967843445:5005",
        number_to: "+17862445375",
        number_from: "1527785692",
        transaction_id: "hgfdhgf",
        transfer_sip_addr: "1208@141.95.204.28:4099",
        carrier_gw: "141.95.204.26:8062",
        vm_drop_fileurl: "http://55.187.149.196:5533/967843445/vm_file.wav",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("/call/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },
    handleForm() {
      this.$refs.form.validate().then(async (success) => {
        // Validate Inputs
        if (!success) {
          this.errors.all = true;
          return;
        }

        // Form
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          bot_url: this.bot_url,
          number_to: this.number_to,
          number_from: this.number_from,
          transaction_id: this.transaction_id,
          transfer_sip_addr: this.transfer_sip_addr,
          carrier_gw: this.carrier_gw,
          vm_drop_fileurl: this.vm_drop_fileurl,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch("/call/", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            console.log(myHeaders);
            console.log(result);
            if (result === '{"status":"initiated"}') {
              this.submitted = true;
              this.errors.all = false;
            } else {
              this.errors.network = result.statusText;
              this.errors.all = true;
            }
          })
          .catch((e) => {
            this.errors.all = true;
            this.errors.network = `${e.statusText}`;
          });
      });
    },
  },
};
</script>

<style lang="scss">
$green: #bad535;
$brown: #4a4a42;
$light-brown: #75756e;
$beige: #ebe8e5;
$purple: #702b68;
$dark-purple: #3c0535;
$white: #fff;
$light-gray: #ddd;
$orange-gray: #d7d2cb;
$sand: #f2f1ef;
$black: #000;
$stone: #c4c4c4;
$dark-green: #46661d;

$brandon-grotesque: "Brandon Grotesque";
$classico-urw: "Classico URW";

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close {
  cursor: pointer;
  color: #dc3545;
  font-size: 24px;
}

.form {
  padding: 32px 12px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.05);
  .header {
    background: linear-gradient(90.52deg, #6295ff 26.89%, #4ddce0 98.03%);
  }

  label,
  input {
    font-size: 21px;
    line-height: 30px;
  }
  input {
    -moz-appearance: initial;
    border-radius: 5px;
    padding: 9px 17px;
    font-size: 21px;
    line-height: 30px;
    &[type="date"],
    &[type="time"] {
      &::before {
        font-family: "Font Awesome 5 Pro", sans-serif;
        position: absolute;
        width: 60px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        pointer-events: none;
        cursor: pointer;
        top: 0;
        bottom: 0;
        right: 0;
        display: none;
        justify-content: center;
        align-items: center;
      }
    }
    &[type="date"] {
      &::before {
        content: "\f073";
      }
    }
    &[type="time"] {
      &::before {
        content: "\f017";
      }
    }
    &[type="checkbox"] {
      accent-color: $purple;
      width: 21px;
      height: 21px;
    }
  }
  .toggleDateAndTime {
    cursor: pointer;
    &__icon {
      font-size: 2.1rem;
      color: $purple;
      margin-left: 12px;
      transition: transform 0.3s ease;
      &--active {
        transform: rotate(180deg);
      }
    }
  }
  .validationError {
    position: relative;
    input {
      border: 2px solid #dc3545;
    }
    input[type="date"],
    input[type="time"] {
      &::before {
        background: #dc3545;
      }
    }
    .icon {
      position: absolute;
      top: 14px;
      right: 14px;
      color: #dc3545;
      font-size: 21px;
      &--rightMore {
        right: 69px;
      }
    }

    & > input[type="date"],
    input[type="time"] {
      &::before {
        display: flex;
      }
    }
  }
  .validationMessage {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #dc3545;
  }
  button {
    background: $purple;
    border-radius: 5px;
    border: 1.5px solid $purple;
    padding: 13px 28px;
    font-weight: 500;
    font-size: 21px;
    line-height: 30px;
    width: 309px;
    color: $white;
    &:hover {
      background: $green;
      border: 1.5px solid $purple;
      color: black;
    }
  }
  .recaptchaError {
    border: 1px solid #dc3545;
    border-radius: 3px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-down-enter-active,
.slide-fade-down-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-down-enter, .slide-fade-down-leave-to
/* .slide-fade-down-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>

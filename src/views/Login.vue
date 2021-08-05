<!--<template>-->
<!--  <div>-->
<!--    <div class="container">-->
<!--      <b-alert v-model="showDismissibleAlert" dismissible variant="danger" class="alert alert-dismissible alert-info">-->
<!--        {{ errorText }}-->
<!--      </b-alert>-->
<!--    </div>-->
<!--    <div class="container border-light mt-4">-->
<!--      <b-form inline>-->
<!--        <label class="sr-only" for="inline-form-input-name">Name</label>-->
<!--        <b-form-input-->
<!--          id="inline-form-input-name"-->
<!--          v-model="form.username"-->
<!--          class="mb-2 mr-sm-2"-->
<!--          placeholder="Name"-->
<!--        ></b-form-input>-->

<!--        <label class="sr-only" for="inline-form-input-password">Password</label>-->
<!--        <b-form-input-->
<!--          id="inline-form-input-name"-->
<!--          v-model="form.password"-->
<!--          class="mb-2 mr-sm-2"-->
<!--          placeholder="Password"-->
<!--        ></b-form-input>-->

<!--        <b-form-checkbox class="mb-2 mr-sm-2">Remember me</b-form-checkbox>-->

<!--        <b-button variant="primary" @click.prevent="login">Sign in</b-button>-->
<!--      </b-form>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div>
    <div class="overflow-y-auto fill-height d-flex align-center justify-center pa-4 v-sheet theme--light rounded-t grey lighten-5">
      <v-alert
        v-if="alert"
        border="bottom"
        color="red"
        type="error"
        dismissible
      >{{ errorText }}</v-alert>
    </div>
    <v-container class="v-sheet v-sheet--outlined theme--light rounded max-width">
      <v-form
        ref="form"
      >
        <v-text-field
          v-model="form.username"
          :counter="10"
          label="Name"
        ></v-text-field>

        <v-text-field
          v-model="form.password"
          label="Password"
        ></v-text-field>

        <v-checkbox
          v-model="form.confirm"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
        ></v-checkbox>

        <v-btn
          color="success"
          class="mr-4"
          @click="login"
        >
          Log in
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Login',
  data: () => ({
    form: {
      username: '',
      password: '',
      confirm: false
    },
    errorText: '',
    alert: false
  }),
  methods: {
    login () {
      axios.post('https://localhost:5001/api/account/login', {
        username: this.form.username,
        password: this.form.password
      })
        .then(response => console.log(response))
        .catch(error => {
          this.alert = true
          if (error.response.status >= 400 && error.response.status < 500) {
            this.errorText = `Client error: ${error.message}`
          } else if (error.response.status >= 500) {
            this.errorText = `Server error: ${error.message}`
          }
        })
    }
  }
}
</script>

<style scoped>
.max-width{
  margin-top: 30px;
  max-width: 868px;
}
</style>

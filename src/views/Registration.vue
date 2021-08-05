<!--<template>-->
<!--  <div>-->
<!--    <div class="container">-->
<!--      <b-alert v-model="showDismissibleAlert" dismissible>-->
<!--        {{ errorText }}-->
<!--      </b-alert>-->
<!--    </div>-->
<!--    <div class="container border-light mt-4">-->
<!--      <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">-->
<!--        <b-form-group-->
<!--          id="input-group-1"-->
<!--          class="mb-2 mr-sm-2"-->
<!--          label="Email address:"-->
<!--          label-for="input-1"-->
<!--          description="We'll never share your email with anyone else."-->
<!--        >-->
<!--          <b-form-input-->
<!--            id="input-1"-->
<!--            v-model="form.email"-->
<!--            type="email"-->
<!--            placeholder="Enter email"-->
<!--            required-->
<!--          ></b-form-input>-->
<!--        </b-form-group>-->

<!--        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">-->
<!--          <b-form-input-->
<!--            id="input-2"-->
<!--            v-model="form.username"-->
<!--            class="mb-2 mr-2"-->
<!--            placeholder="Enter name"-->
<!--            required-->
<!--          ></b-form-input>-->
<!--        </b-form-group>-->

<!--        <b-form-group id="input-group-2" label="Password" label-for="input-2">-->
<!--          <b-form-input-->
<!--            id="input-2"-->
<!--            v-model="form.password"-->
<!--            class="mb-2 mr-2"-->
<!--            placeholder="Password"-->
<!--            required-->
<!--          ></b-form-input>-->
<!--        </b-form-group>-->

<!--        <b-button type="submit" variant="success">Submit</b-button>-->
<!--        <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>-->
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
      >{{ errorText }}
      </v-alert>
    </div>
    <v-container class="v-sheet v-sheet--outlined theme--light rounded max-width">
      <form>
        <v-text-field
          v-model="form.username"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
        ></v-text-field>
        <v-select
          v-model="form.select"
          :items="genders"
          label="Gender"
          required
        ></v-select>
        <v-checkbox
          v-model="form.checkbox"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn
          class="mr-4"
          @click.prevent="onSubmit"
        >
          submit
        </v-btn>
        <v-btn @click="onReset">
          clear
        </v-btn>
      </form>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Registration',
  data: () => ({
    form: {
      email: '',
      username: '',
      password: '',
      select: null,
      checkbox: false
    },
    genders: [
      'Male',
      'Female'
    ],
    show1: false,
    errorText: '',
    alert: false
  }),
  methods: {
    onSubmit () {
      axios.post('https://localhost:5001/api/account/register', {
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
    },
    onReset () {
      // Reset our form values
      this.form.email = ''
      this.form.username = ''
      this.form.password = ''
      this.form.select = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
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

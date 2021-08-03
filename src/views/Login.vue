<template>
  <div class="container border-light mt-4">
    <b-form inline>
      <label class="sr-only" for="inline-form-input-name">Name</label>
      <b-form-input
        id="inline-form-input-name"
        v-model="form.username"
        class="mb-2 mr-sm-2"
        placeholder="Name"
      ></b-form-input>

      <label class="sr-only" for="inline-form-input-password">Password</label>
      <b-form-input
        id="inline-form-input-name"
        v-model="form.password"
        class="mb-2 mr-sm-2"
        placeholder="Password"
      ></b-form-input>

      <b-form-checkbox class="mb-2 mr-sm-2">Remember me</b-form-checkbox>

      <b-button variant="primary" @click.prevent="login">Sign in</b-button>
    </b-form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Login',
  data: () => ({
    form: {
      username: '',
      password: ''
    }
  }),
  methods: {
    login () {
      const formData = new FormData()
      formData.append('username', this.form.username)
      formData.append('password', this.form.password)
      axios.post('https://localhost:5001/api/account/login', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="scss">

</style>

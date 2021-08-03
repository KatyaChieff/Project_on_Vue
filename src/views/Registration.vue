<template>
  <div class="container border-light mt-4">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        class="mb-2 mr-sm-2"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"

          class="mb-2 mr-2"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          class="mb-2 mr-2"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success" >Submit</b-button>
      <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      form: {
        email: '',
        name: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
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

</style>

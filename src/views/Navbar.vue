<!--<template>-->
<!--  <div>-->
<!--    <b-nav pills>-->
<!--      <router-link to="home" class="nav-pills nav-link">Home</router-link>-->
<!--      <router-link to="login" class="nav-pills nav-link">Login</router-link>-->
<!--      <router-link to="registration" class="nav-pills nav-link">Registration</router-link>-->
<!--      <b-nav-item-dropdown-->
<!--        id="my-nav-dropdown"-->
<!--        text="Dropdown"-->
<!--        toggle-class="nav-link-custom"-->
<!--        right-->
<!--      >-->
<!--        <b-dropdown-item>One</b-dropdown-item>-->
<!--        <b-dropdown-item>Two</b-dropdown-item>-->
<!--        <b-dropdown-divider></b-dropdown-divider>-->
<!--        <b-dropdown-item>Three</b-dropdown-item>-->
<!--      </b-nav-item-dropdown>-->
<!--    </b-nav>-->
<!--  </div>-->
<!--</template>-->
<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        <router-link to="home">Home</router-link>
        <v-icon>mdi-home</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        <router-link to="login">Login</router-link>
        <v-icon>mdi-shield-lock</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        <router-link to="registration">Registration</router-link>
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style scoped>

</style>

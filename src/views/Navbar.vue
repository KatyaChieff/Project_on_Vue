<template>
  <div>
    <b-nav pills>
      <router-link to="home" class="nav-pills nav-link">Home</router-link>
      <router-link to="login" class="nav-pills nav-link">Login</router-link>
      <router-link to="registration" class="nav-pills nav-link">Registration</router-link>
      <b-nav-item-dropdown
        id="my-nav-dropdown"
        text="Dropdown"
        toggle-class="nav-link-custom"
        right
      >
        <b-dropdown-item>One</b-dropdown-item>
        <b-dropdown-item>Two</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Three</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </div>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>

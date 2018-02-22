<template>
  <v-layout justify-center align-center>
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <p><i>now with silly logo &trade;</i></p>
  </v-layout>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      msg: 'Welcome to Punk API Browser',
    }
  },
}
</script>

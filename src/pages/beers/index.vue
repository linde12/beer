<template>
  <v-layout class="truncate-text">
    <v-list two-line class="list">
      <template v-for="beer in beers.beers">
        <v-list-tile avatar :key="beer.title" @click="">
          <v-list-tile-avatar>
            <img :src="beer.image_url">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="beer.name"></v-list-tile-title>
            <v-list-tile-sub-title v-text="beer.tagline"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <v-snackbar
      :timeout="3000"
      color="error"
      v-model="snackbar"
    >
      Oops, something wen't wrong!
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'beers-page',
  computed: mapState(['beers']),
  methods: {
    ...mapActions(['fetchBeers']),
  },
  created() {
    this.fetchBeers()
  },
  data() {
    return {
      snackbar: false,
    }
  },
  watch: {
    'beers.error': function (newVal) {
      this.snackbar = newVal
    },
  },
}
</script>

<style scoped>
.list {
  width: 100%;
}
.truncate-text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

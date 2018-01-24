<template>
  <v-app>
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-layout>

          <v-list-tile v-else :to="item.to" :exact="item.exact">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Punk API Browser</span>
      </v-toolbar-title>

      <v-text-field
        v-show="isBeersPage"
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 500px; min-width: 128px"
        v-model="beerFilter"
        @input="debounceSearch"
      ></v-text-field>

      <div class="d-flex align-center" style="margin-left: auto">
        <v-tooltip bottom>
          <v-btn icon slot="activator">
            <v-icon>notifications</v-icon>
          </v-btn>
          <span>Be notified when a new beer arrives</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-btn v-if="!wifi" icon slot="activator">
            <v-icon>signal_wifi_off</v-icon>
          </v-btn>
          <span>Offline</span>
        </v-tooltip>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
const debounce = (fn, wait) => {
  let timeout;
  return function() {
    const ctx = this
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(ctx, args), wait)
  }
}

export default {
  name: 'app',
  computed: {
    isBeersPage() {
      return this.$route.name === 'Beers'
    },
  },
  methods: {
    debounceSearch: debounce(function () {
      this.$store.dispatch('fetchBeers', {beer_name: this.beerFilter})
    }, 250)
  },
  data() {
    return {
      items: [
        { heading: 'Navigation' },
        {
          icon: 'home',
          text: 'Home',
          to: '/',
          exact: true,
        },
        {
          icon: 'local_drink',
          text: 'Beers',
          to: '/beers',
        },
      ],
      drawer: false,
      dialog: false,
      wifi: window.navigator.onLine,
      beerFilter: '',
    }
  },
}
</script>

<style>
</style>

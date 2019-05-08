<template>
  <ion-app id="app">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>{{ currentRouteName }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <div class="nav">
          <router-link to="/">
            Home
          </router-link>|
          <router-link to="/about">
            About
          </router-link>
        </div>
        <router-view />
      </ion-card>
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"

@Component
export default class App extends Vue {
  @Prop()
  private myName: string

  private youtName: string

  get currentRouteName () {
    //asdsd
    return this.$route.name
  }

  public doThis () {

  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

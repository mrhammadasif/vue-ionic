<template>
  <ion-card-header>
    <ion-card-title>Home</ion-card-title>
    <ion-card-subtitle>This is homepage</ion-card-subtitle>
  </ion-card-header>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import HelloWorld from "@/components/HelloWorld.vue" // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

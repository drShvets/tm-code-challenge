<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="SWAPI Planets"></v-app-bar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

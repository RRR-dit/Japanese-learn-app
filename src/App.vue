<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Japanese-learn-app" />
      <h4></h4>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Lesson">Start!</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style></style>

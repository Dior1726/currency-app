<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCurrencyStore } from './stores/currency'

const { getSymbols } = useCurrencyStore()

getSymbols()
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <h1>Currency app</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
</style>

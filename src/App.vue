<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <h1>Currency app</h1>

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
}

.header {
  width: 100%;
  border-bottom: 1px solid var(--color-border);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.header h1 {
  font-size: 24px;
  color: hsla(160, 100%, 37%, 1);
  font-weight: 500;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

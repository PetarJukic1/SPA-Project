<template>
  <div class="not-found-view">
    <h1>404 - Page not found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link to="/">Go back to the home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style>
.not-found-view {
  text-align: center;
  padding: 10px;
}
</style>

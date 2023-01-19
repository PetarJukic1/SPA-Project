<template>
  <div>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    }
  }
}
</script>

<style scoped>
.title {
  margin-right: 20px;
}
</style>
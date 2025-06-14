<template>
  <div class="home">
    <h1>Welcome to Our Catalog</h1>
    <router-link to="/catalog" class="btn btn-primary">Go to Catalog</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

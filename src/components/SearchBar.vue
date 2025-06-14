<template>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" @input="handleInput" placeholder="Search..." />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleInput() {
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 16px;
}
input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}
</style>

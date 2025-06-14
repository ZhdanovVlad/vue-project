<template>
  <div class="catalog-item" @click="$emit('click')">
    <img :src="item.image" :alt="item.title" />
    <h3>{{ item.title }}</h3>
    <p>{{ item.genre }}</p>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.catalog-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.catalog-item:hover {
  transform: scale(1.05);
}
img {
  max-width: 100%;
  border-radius: 8px;
}
</style>

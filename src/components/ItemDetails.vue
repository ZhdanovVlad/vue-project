<template>
  <div class="item-details">
    <h1>{{ item.title }}</h1>
    <img :src="item.image" :alt="item.title" />
    <p><strong>Genre:</strong> {{ item.genre }}</p>
    <p><strong>Description:</strong> {{ item.description }}</p>
  </div>
</template>

<script>
import items from '@/data/items.json'; // Assuming you have a JSON file with items

export default {
  name: 'ItemDetails',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      item: null,
    };
  },
  created() {
    this.item = items.find((item) => item.id.toString() === this.id);
  },
};
</script>

<style scoped>
.item-details {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
img {
  max-width: 100%;
  border-radius: 8px;
}
</style>

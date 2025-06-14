<template>
  <div v-if="item">
    <h1>{{ item.title }}</h1>
    <img :src="item.image" :alt="item.title" />
    <p>{{ item.genre }}</p>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
import { catalogItems } from '@/data';

export default {
  props: ['id'],
  computed: {
    item() {
      return catalogItems.find((item) => item.id.toString() === this.id);
    },
  },
};
</script>

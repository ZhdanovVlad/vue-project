<template>
  <div class="catalog">
    <search-bar @search="handleSearch"></search-bar>
    <div class="catalog-items">
      <catalog-item
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        @click="goToDetails(item.id)"
      ></catalog-item>
    </div>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue';
import SearchBar from './SearchBar.vue';
import items from '@/data/items.json'; // Assuming you have a JSON file with items

export default {
  name: 'Catalog',
  components: {
    CatalogItem,
    SearchBar,
  },
  data() {
    return {
      items: items,
      searchQuery: '',
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
    },
    goToDetails(id) {
      this.$router.push({ name: 'ItemDetails', params: { id } });
    },
  },
};
</script>

<style scoped>
.catalog-items {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>

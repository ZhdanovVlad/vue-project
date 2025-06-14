import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import Catalog from '@/components/Catalog.vue';
import ItemDetails from '@/components/ItemDetails.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/catalog', component: Catalog },
  { path: '/details/:id', component: ItemDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

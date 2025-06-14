import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import Catalog from '@/components/Catalog.vue';
import ItemDetails from '@/components/ItemDetails.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog,
    },
    {
      path: '/details/:id',
      name: 'ItemDetails',
      component: ItemDetails,
      props: true,
    },
  ],
});

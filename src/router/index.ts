import * as VueRouter from 'vue-router';
import index from '../pages/index.vue';
import friend from '../pages/friend.vue';
import user from '../pages/user.vue';
import team from '../pages/team.vue';
import hall from '../pages/hall.vue';

const routes = [
  { path: '/index', component: index },
  { path: '/friend', component: friend },
  { path: '/user', component: user },
  { path: '/team', component: team },
  { path: '/hall', component: hall },
];

export const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

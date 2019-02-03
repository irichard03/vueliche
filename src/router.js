import Vue from 'vue';
import Router from 'vue-router';
import GamePage from './views/GamePage.vue';


Vue.use(Router);

export default new Router({
  
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'GamePage',
      component: GamePage,
    },

    {
      path: '/signup',
      name: 'signup',
      meta: {
        public: true
      },

      component: () => import( './views/SignUp.vue' ),
    },
    {
      path: '/signin',
      name: 'signin',
      meta: {
        public: true
      },
    
      component: () => import( './views/SignIn.vue' ),
    },
    {
      path: '/playgame',
      name: 'playgame',
      meta: {
        authRequired: true
      },
      
      component: () => import( './views/PlayGame.vue' )
    },
  ],

});




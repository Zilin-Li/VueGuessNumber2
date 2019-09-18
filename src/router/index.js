import Vue from 'vue'
import Router from 'vue-router'
import GameOne from '@/components/GameOne'
import GameTwo from '@/components/GameTwo'
import GameThree from '@/components/GameThree'
import GameFour from '@/components/GameFour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameOne',
      component: GameOne
    },
    {
      path: '/GameTwo',
      name: 'GameTwo',
      component: GameTwo
    },
    {
      path: '/GameThree',
      name: 'GameThree',
      component: GameThree
    },
    {
      path: '/GameFour',
      name: 'GameFour',
      component: GameFour
    },

  ]
})

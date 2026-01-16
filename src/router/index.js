import {
  createRouter,
  createWebHistory,
} from 'vue-router'

import slide from "@/views/Slide/slide.vue"
import home from '@/views/Home/home.vue'
import homeCheck from '@/views/HomeCheck/homeCheck.vue'
import homeCharacter from '@/views/HomeCharacter/homeCharacter.vue'
import homeCharacterModify from '@/views/HomeCharacterModify/homeCharacterModify.vue'
import homeCommunity from "@/views/HomeCommunity/homeCommunity.vue"
import homeCommunityList from '@/views/HomeCommunityList/homeCommunityList.vue'
import homeAIinsight from '@/views/HomeAIinsight/homeAIinsight.vue'
import homeIntroduction from '@/views/HomeIntroduction/homeIntroduction.vue'
import games from '@/views/Games/games.vue'
import tasks from '@/views/Tasks/tasks.vue'
import tasksDetail from '@/views/TasksDetail/tasksDetail.vue'
import tasksHistory from '@/views/TasksHistory/tasksHistory.vue'
import tasksIssueATask from '@/views/TasksIssueATask/tasksIssueATask.vue'
import plaza from '@/views/Plaza/plaza.vue'
import plazaMomo from '@/views/PlazaMomo/plazaMomo.vue'
import more from '@/views/More/more.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: "/",
      redirect: "slide",
    },
    {
      path: '/slide',
      name: 'slide',
      component: slide,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        tab: 'home',
      },
    },
    {
      path: '/home-check',
      name: 'homeCheck',
      component: homeCheck,
      meta: {
        tab: 'homeCheck',
      },
    },
    {
      path: '/home-Character',
      name: 'homeCharacter',
      component: homeCharacter,
      meta: {
        tab: 'homeCharacter',
      },
    },
    {
      path: '/home-Character-modify',
      name: 'homeCharacterModify',
      component: homeCharacterModify,
      meta: {
        tab: 'homeCharacterModify',
      },
    },
    {
      path: '/home-community',
      name: 'homeCommunity',
      component: homeCommunity,
      meta: {
        tab: 'homeCommunity',
      },
    },
    {
      path: '/home-communityList',
      name: 'homeCommunityList',
      component: homeCommunityList,
      meta: {
        tab: 'homeCommunityList',
      },
    },
    {
      path: '/home-aiInsight',
      name: 'homeAIinsight',
      component: homeAIinsight,
      meta: {
        tab: 'homeAIinsight',
      },
    },
    {
      path: '/home-introduction',
      name: 'homeIntroduction',
      component: homeIntroduction,
      meta: {
        tab: 'homeIntroduction',
      },
    },
    {
      path: '/games',
      name: 'games',
      component: games,
      meta: {
        tab: 'games',
      },
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: tasks,
      meta: {
        tab: 'tasks',
      },
    },
    {
      path: '/tasks-detail',
      name: 'tasksDetail',
      component: tasksDetail,
      meta: {
        tab: 'tasksDetail',
      },
    },
    {
      path: '/tasks-history',
      name: 'tasksHistory',
      component: tasksHistory,
      meta: {
        tab: 'tasksHistory',
      },
    },
    {
      path: '/tasks-issueATask',
      name: 'tasksIssueATask',
      component: tasksIssueATask,
      meta: {
        tab: 'tasksIssueATask',
      },
    },
    {
      path: '/plaza',
      name: 'Global Space',
      component: plaza,
      meta: {
        tab: 'plaza',
      },
    },
    {
      path: '/plaza-momo',
      name: 'Discover',
      component: plazaMomo,
      meta: {
        tab: 'plazaMomo',
      },
    },
    {
      path: '/more',
      name: 'more',
      component: more,
      meta: {
        tab: 'more',
      },
    }
  ],
  scrollBehavior: () => ({
    top: 0,
    left: 0
  }),
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}


router.beforeEach((to, from, next) => {
  scrollToTop()
  if (to.name === "tasksDetail") {
    const gameStartId = localStorage.getItem("tasks_jobId")
    if (!gameStartId) {
      return next({
        path: '/tasks'
      })
    }
  }
  if (to.name !== "tasksDetail") {
    localStorage.removeItem("tasks_jobId")
  }
  next()
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/home/index.vue'
import Home from '../views/home/Home.vue'
import Springboot from '../views/home/Springboot.vue'
import Springcloud from '../views/home/Springcloud.vue'
import Article from '../views/home/Article.vue'
import Timeline from '../views/home/Timeline.vue'
import Webpage from '../views/home/Webpage.vue'
import Articledetail from '../views/article/Articledetail.vue'
import SpringbootQT from '../views/home/springboot/springbootQT.vue'
import SpringbootQTdetail from '../views/home/springboot/springbootQTdetail.vue'
import BlogDetail from '../views/home/blog/blogdetail.vue'
import TimeLineBlogDetail from '../views/home/blog/timeLineBlogDetail.vue'
import SpringbootGithub from '../views/home/springboot/springbootGithub.vue'
import SpringbootGitee from '../views/home/springboot/springbootGitee.vue'
import SpringbootThird from '../views/home/springboot/springbootThird.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/articledetail', component: Articledetail },
  {
    path: '/index',
    component: index,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        meta: {
          keepAlive: true
        }
      },
      { path: '/springboot', component: Springboot },
      { path: '/springcloud', component: Springcloud },
      { path: '/article', component: Article },
      {
        path: '/timeline',
        component: Timeline,
        meta: {
          keepAlive: true
        }
      },
      { path: '/webpage', component: Webpage },
      { path: '/springbootQT', component: SpringbootQT },
      { path: '/springbootQTdetail/:id', component: SpringbootQTdetail },
      { path: '/blogdetail/:id', component: BlogDetail },
      { path: '/timeLineBlogDetail/:id', component: TimeLineBlogDetail },
      { path: '/springbootGithub', component: SpringbootGithub },
      { path: '/springbootGitee', component: SpringbootGitee }
    ]
  },
  { path: '/springbootThird', component: SpringbootThird }
]

const router = new VueRouter({
  routes
})

export default router

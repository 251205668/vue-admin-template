import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
// 公共路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  }
]
// 权限控制路由
export const asyncRoutes = [
  {
    path: '/student',
    component: Layout,
    meta: { title: '学生信息管理', icon: 'documentation', roles: ['admin', 'student', 'teacher'] },
    children: [
      {
        path: '/add',
        name: 'add',
        component: () => import('@/views/student/add'),
        meta: { title: '添加学生信息', icon: 'drag' }
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('@/views/student/edit'),
        meta: { title: '修改学生信息', icon: 'edit' }
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/student/search'),
        meta: { title: '查询学生成绩', icon: 'form' }
      },
      {
        path: '/delete',
        name: 'delete',
        component: () => import('@/views/student/delete'),
        meta: { title: '删除学生成绩', icon: 'delete' }
      }
    ]
  },
  {
    path: '/teacher',
    component: Layout,
    meta: { title: '教师信息管理', icon: 'documentation', roles: ['admin', 'student', 'teacher'] },
    children: [
      {
        path: '/add',
        name: 'add',
        component: () => import('@/views/teacher/add'),
        meta: { title: '添加教师信息', icon: 'drag' }
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('@/views/teacher/edit'),
        meta: { title: '修改教师信息', icon: 'edit' }
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/teacher/search'),
        meta: { title: '查询教师成绩', icon: 'form' }
      },
      {
        path: '/delete',
        name: 'delete',
        component: () => import('@/views/teacher/delete'),
        meta: { title: '删除教师成绩', icon: 'delete' }
      }
    ]
  },
  {
    path: '/chat',
    name: 'chat',
    component: Layout,
    meta: { title: '在线交流系统', icon: 'wechat' }
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router

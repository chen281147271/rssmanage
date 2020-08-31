/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const attRouter = {
  path: '/task',
  component: Layout,
  redirect: '/task/querytask',
  name: 'task',
  meta: {
    title: '考核任务',
    icon: 'form'
  },
  children: [
    {
      path: 'querytask',
      component: () => import('@/views/task/querytask'),
      name: 'querytask',
      meta: { title: '考核任务查询', noCache: true }
    },
    {
      path: 'editdevice',
      component: () => import('@/views/task/editdevice'),
      name: 'editdevice',
      meta: { title: '设备类型维护', noCache: true }
    }
  ]
}

export default attRouter

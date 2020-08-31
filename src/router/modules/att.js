/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const attRouter = {
  path: '/att',
  component: Layout,
  redirect: '/att/queryatt',
  name: 'Att',
  meta: {
    title: '考勤',
    icon: 'att'
  },
  children: [
    {
      path: 'queryatt',
      component: () => import('@/views/att/queryatt'),
      name: 'Queryatt',
      meta: { title: '考勤查询', noCache: false }
    },
    {
      path: 'editatt',
      component: () => import('@/views/att/editatt'),
      name: 'editatt',
      meta: { title: '出勤人员维护', noCache: false }
    }
  ]
}

export default attRouter

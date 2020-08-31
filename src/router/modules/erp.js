/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const attRouter = {
  path: '/erp',
  component: Layout,
  redirect: '/erp/querycost',
  name: 'Erp',
  meta: {
    title: 'BOM成本',
    icon: 'cost'
  },
  children: [
    {
      path: 'querycost',
      component: () => import('@/views/erp/querycost'),
      name: 'querycost',
      meta: { title: '成本查询', noCache: true }
    },
    {
      path: 'historycost',
      component: () => import('@/views/erp/historycost'),
      name: 'historycost',
      meta: { title: '历史成本查询', noCache: true }
    }
  ]
}

export default attRouter

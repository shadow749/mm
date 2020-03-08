export default {
  path: '/movie',
  component: () => import('@/views/movie'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'hot',
      component: () => import('@/components/Hot')
    },
    {
      path: 'later',
      component: () => import('@/components/Later')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    { /* 电影页面默认到热映 */
      path: '/movie',
      redirect: '/movie/hot'
    }
  ]
}

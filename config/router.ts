export default [
  {
    path: '/',
    name: '首页',
    component: '@/pages/home/index',
  },
  {
    path: '/login',
    // 新页面打开
    target: '_blank',
    // 不展示顶栏
    headerRender: false,
    // 不展示页脚
    footerRender: false,
    // 不展示菜单
    menuRender: false,
    component: '@/pages/login/Login',
  },
  {
    path: '/use',
    name: '用户管理',
    routes: [
      {
        path: '/use/uselist',
        name: '用户列表',
        component: '@/pages/use/UseList',
      },
    ],
  },
  {
    path: '/root',
    name: '权限管理',
    routes: [
      {
        path: '/root/IdList',
        name: '角色列表',
        component: '@/pages/root/idlist',
      },
      {
        path: '/root/rootlist',
        name: '权限列表',
        component: '@/pages/root/RootList',
      },
    ],
  },
  {
    path: '/good',
    name: '商品管理',
    routes: [
      {
        path: '/good/goodlist',
        name: '商品列表',
        component: '@/pages/good/GoodList',
      },
      {
        path: '/good/cate',
        name: '分类参数',
        component: '@/pages/good/Cate',
      },
      {
        path: '/good/goodcate',
        name: '商品分类',
        component: '@/pages/good/GoodCate',
      },
    ],
  },
  {
    path: '/order',
    name: '订单管理',
    routes: [
      {
        path: '/order/orderlist',
        name: '订单分类',
        component: '@/pages/order/OrderList',
      },
    ],
  },
  {
    path: '/data',
    name: '订单管理',
    routes: [
      {
        path: '/data/datalist',
        name: '订单分类',
        component: '@/pages/data/DataList',
      },
    ],
  },
];

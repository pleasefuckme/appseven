import home from './components/home';

export default [{
  path: '/',
  component: home,
  children: [{
    path: '/',
    redirect: '/loan',
    meta:{
        requireLogin:true,
      }
  },
    {
      path: '/login',
      meta: {
        title: '登录'
      },
      component: resolve => require(['./view/other/login'], resolve)
    },
    {
      path: '/reg',
      meta: {
        title: '注册'
      },
      component: resolve => require(['./view/other/reg'], resolve)
    },
    {
      path: '/forget',
      meta: {
        title: '忘记密码'
      },
      component: resolve => require(['./view/other/forget'], resolve)
    },
    {
      path: 'user',
      component: home,
      children: [
        {
          path: '消息提醒',
          meta: {
            title: '消息提醒'
          },
          component: resolve => require(['./view/user/消息提醒'], resolve)
        },

      ]
    },

    {
      path: 'loan',
      component: home,
      children: [{
        path: '/',
        meta: {
          title: '工单系统'
        },
        component: resolve => require(['./view/loan/index'], resolve)
      },
      {
          path: '设备信息',
          meta: {
            title: '设备信息'
          },
          component: resolve => require(['./view/loan/设备信息'], resolve)
       },
       {
          path: '工单详情',
          meta: {
            title: '工单详情'
          },
          component: resolve => require(['./view/loan/工单详情'], resolve)
       },
        {
          path: '报修-未派单',
          meta: {
            title: '未派单'
          },
          component: resolve => require(['./view/loan/报修-未派单'], resolve)
        },
        {
          path: '报修-已派单',
          meta: {
            title: '已派单'
          },
          component: resolve => require(['./view/loan/报修-已派单'], resolve)
        },
        {
          path: '报修-处理中',
          meta: {
            title: '处理中'
          },
          component: resolve => require(['./view/loan/报修-处理中'], resolve)
        },
        {
          path: '报修-处理完毕待审核',
          meta: {
            title: '处理完毕待审核'
          },
          component: resolve => require(['./view/loan/报修-处理完毕待审核'], resolve)
        },
        {
          path: '报修-已关闭',
          meta: {
            title: '已关闭'
          },
          component: resolve => require(['./view/loan/报修-已关闭'], resolve)
        },
        {
          path: 'reportYet',
          meta: {
            title: 'reportYet'
          },
          component: resolve => require(['./view/loan/reportYet'], resolve)
        },
        {
          path: 'reportRea',
          meta: {
            title: 'reportRea'
          },
          component: resolve => require(['./view/loan/reportRea'], resolve)
        },
        {
          path: 'reportDoing',
          meta: {
            title: 'reportDoing'
          },
          component: resolve => require(['./view/loan/reportDoing'], resolve)
        },
        {
          path: 'reportToAudit',
          meta: {
            title: 'reportToAudit'
          },
          component: resolve => require(['./view/loan/reportToAudit'], resolve)
        },
        {
          path: 'reportClosed',
          meta: {
            title: 'reportClosed'
          },
          component: resolve => require(['./view/loan/reportClosed'], resolve)
        },
        {
          path: '报修列表',
          meta: {
            title: '报修列表'
          },
          component: resolve => require(['./view/loan/报修列表'], resolve)
        },
        {
          path: 'orderRea',
          meta: {
            title: 'orderRea'
          },
          component: resolve => require(['./view/loan/orderRea'], resolve)
        },
        {
          path: 'orderDoing',
          meta: {
            title: 'orderDoing'
          },
          component: resolve => require(['./view/loan/orderDoing'], resolve)
        },
        {
          path: 'orderToAudit',
          meta: {
            title: 'orderToAudit'
          },
          component: resolve => require(['./view/loan/orderToAudit'], resolve)
        },
        {
          path: 'orderTwice',
          meta: {
            title: 'orderTwice'
          },
          component: resolve => require(['./view/loan/orderTwice'], resolve)
        },
        {
          path: 'orderClosed',
          meta: {
            title: 'orderClosed'
          },
          component: resolve => require(['./view/loan/orderClosed'], resolve)
        },
        {
          path: '接单列表',
          meta: {
            title: '报修列表'
          },
          component: resolve => require(['./view/loan/接单列表'], resolve)
        },
        {
          path: '接单-已接单',
          meta: {
            title: '已接单'
          },
          component: resolve => require(['./view/loan/接单-已接单'], resolve)
        },
        {
          path: '接单-已关闭',
          meta: {
            title: '已关闭'
          },
          component: resolve => require(['./view/loan/接单-已关闭'], resolve)
        },
        {
          path: '接单-处理中',
          meta: {
            title: '处理中'
          },
          component: resolve => require(['./view/loan/接单-处理中'], resolve)
        },
        {
          path: '接单-二次派单',
          meta: {
            title: '二次派单'
          },
          component: resolve => require(['./view/loan/接单-二次派单'], resolve)
        },
        {
          path: '接单-处理完毕待审核',
          meta: {
            title: '处理完毕待审核'
          },
          component: resolve => require(['./view/loan/接单-处理完毕待审核'], resolve)
        },


      ]
    },

    {
      path: 'credit',
      component: home,
      children: [{
        path: 'submit',
        meta: {
          title: '工单提交'
        },
        component: resolve => require(['./view/credit/submit'], resolve)
      },
        {
          path: 'scan',
          meta: {
            title: '二维码扫描'
          },
          component: resolve => require(['./view/credit/scan'], resolve)
        },
				{
				  path: '维修反馈',
				  meta: {
				    title: '维修反馈'
				  },
				  component: resolve => require(['./view/credit/维修反馈'], resolve)
				},
      ]
    },
  ]
},
  {
    path: '*',
    meta: {
      title: '页面不存在'
    },
    component: resolve => require(['./view/other/error'], resolve)
  }
]

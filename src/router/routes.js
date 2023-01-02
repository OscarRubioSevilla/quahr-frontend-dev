const lazyLoad = view => () =>
    import ('../pages/' + view + '.vue')


export default [{
        path: '/',
        name: 'home',
        component: lazyLoad('QLanding')
    },
    {
        path: '/panel',
        name: 'panel',
        component: lazyLoad('Panel')
    }
]
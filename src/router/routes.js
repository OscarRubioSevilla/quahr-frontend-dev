const lazyLoad = view => () =>
    import ('../pages/' + view + '.vue')


import QA from '@/components/layout/QMainLayout.vue'

export default [{
        path: '/',
        name: 'home',
        component: lazyLoad('QLanding')
    }, {
        path: '/cv',
        name: 'cv',
        component: lazyLoad('cv')
    },
    {
        path: '/',
        name: 'layout',
        component: QA,
        children: [{
                name: 'panel',
                path: '/panel',
                component: lazyLoad('Panel')
            },
            {
                name: 'patients',
                path: '/pacientes',
                component: lazyLoad('Pacientes')
            }
        ]
    }
]
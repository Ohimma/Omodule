const login = {}

login.routers = [
    {
        path: 'login01',
        component: () => import('@/components/login/login01.vue'),
    },
    {
        path: 'login02',
        component: () => import('@/components/login/login02.vue'),
    },
    {
        path: 'login03',
        component: () => import('@/components/login/login03.vue'),
    },
    {
        path: 'login04',
        component: () => import('@/components/login/login04.vue'),
    },
]

export default login

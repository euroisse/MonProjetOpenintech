
export const routes = [
    {
       path: '/',
       name: 'acceuil',
       component: () => import('../components/views/Home.vue')
    },
    {
       path: '/vehicles',
       name: 'Vehicles',
       component: () => import('../components/views/VehiclesView.vue')
    },
    { path: '/search', 
      name:'search',
      component:() =>import('../components/views/SearchPage.vue')
     }
   ]
   
   
   
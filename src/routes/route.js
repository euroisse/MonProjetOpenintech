
export const routes = [
    {
       path: '/',
       name: 'acceuil',
       component: () => import('../components/views/Home.vue'),
     
    },
    {
       path: '/vehicles',
       name: 'Vehicles',
       component: () => import('../components/views/VehiclesView.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../components/views/ServiceView.vue')
   },
    { path: '/search', 
      name:'search',
      component:() =>import('../components/Vehicules/SearchPage.vue')
     },
     {
      path:'/faq',
      name: 'faq',
      component:()=> import('../components/Vehicules/FAQs.vue')
     },
     {
      path:'/vehicleFilter',
      name: 'vehicleFilter',
      component:()=> import('../components/Vehicules/VehicleFilter.vue')
     },
     {
      path:'/registerForm',
      name: 'registerForm',
      meta: { hideHeader: true },
      component:()=> import('../components/Authentification/RegisterForm.vue')
     },
     {
      path:'/login',
      name: 'login',
      meta: { hideHeader: true } ,
      component:()=> import('../components/Authentification/Login.vue')
     },
     
   ]
   
   
   
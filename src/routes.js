import purchases from './pages/PurchasesOne.vue' 
import sales from './pages/SalesOne.vue' 
import home from './pages/HomeOne.vue' 

export const routes = [
    {path:'/home',component:home},
    {path:'/sales',component:sales},
    {path:'/purchases',component:purchases}
    
]
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authsmodule } from './auth/auths.module';



const appRoute: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren:()=> import('./auth/auths.module').then(A => A.authsmodule),
    

  },
  {path:'products',loadChildren:() => import('./products/product.routing.module').then(P =>P.productroutingmodule)}
  
  
]
@NgModule({
  imports:[RouterModule.forRoot(appRoute),
    ],
  exports:[
    RouterModule
  ]
   
})
export class AppRoutingModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthguardGuard } from "../auth/authguard.guard";
import { DeactivatedGuard } from "../auth/deactivated.guard";
import { AddComponent } from "./add/add.component";
import { DetailsComponent } from "./details/details.component";
import { ProductsComponent } from "./products.component";
import { ViewComponent } from "./view/view.component";


const productroutes=[
    {
        path:"",component: ProductsComponent, canActivate:[AuthguardGuard], children: [
          
          
           {path: "add",component:AddComponent,canDeactivate:[DeactivatedGuard]},
            { path: "add/:id", component: AddComponent },
            
          
          { path: "view", component: ViewComponent },
          
          { path: "details/:id", component: DetailsComponent },
            
          
        ]
      }

]
@NgModule(
    {
        declarations:[
            ProductsComponent,
            AddComponent,
            ViewComponent,
            DetailsComponent,
            
        ],
        imports:[
            FormsModule,
            CommonModule,
            RouterModule.forChild(productroutes),
        ]
    }
)
export class productroutingmodule
{

}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";

import { AouthcomponntComponent } from './aouthcomponnt/aouthcomponnt.component';
import { authRoutL } from "./auth.routing";

@NgModule(
    {
        declarations: [
            AouthcomponntComponent,
            LoginComponent
          ],
        
        
        imports:[
            CommonModule,
            FormsModule,
            RouterModule.forChild(authRoutL)
],
         providers:[],
        
    
        

    }
)
export class authsmodule {}
import { Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { AouthcomponntComponent } from "./aouthcomponnt/aouthcomponnt.component";

export const authRoutL: Routes = [
    {
        path: '',
        component: AouthcomponntComponent,
        children: [
             { path:'', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent }
        ]
    }

]
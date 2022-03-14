import { NgModule } from "@angular/core";
import { AuthguardGuard } from "./auth/authguard.guard";
import { authservice } from "./auth/authguardservice";
import { DeactivatedGuard } from "./auth/deactivated.guard";

@NgModule(
    {
        providers:[
            authservice,AuthguardGuard,DeactivatedGuard

        ]
    }
)
export class coremodule
{
    
}
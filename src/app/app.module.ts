import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { coremodule } from './core.module';
//ngxs module
import { NgxsModule } from '@ngxs/store';
//ngxs logger plugin
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
//ngxs divetool
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { UserState } from './stroe/state/user.state';





@NgModule({
  declarations: [
    AppComponent,
  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    coremodule,
    //ngxs import
    NgxsModule.forRoot([UserState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()


    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import routing

import {AppRoutingModule} from './app-routing-module'


// import component
import { AppComponent } from './component/app.component';
import { IndexComponent } from './component/index.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import routing

import {AppRoutingModule} from './app-routing-module'


// import component
import { AppComponent } from './component/app.component';
import { IndexComponent } from './component/index.component';
import { CategoryComponent } from './component/category.component';
import { LabelComponent } from './component/label.component';
import { ReadmeComponent } from './component/readme.component';
import { ArticleComponent } from './component/article.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CategoryComponent,
    LabelComponent,
    ReadmeComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

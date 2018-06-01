import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import component

import { IndexComponent } from './component/index.component';
import { CategoryComponent } from './component/category.component';
import { LabelComponent } from './component/label.component';
import { ReadmeComponent } from './component/readme.component';
import { ArticleComponent } from './component/article.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'label', component: LabelComponent },
  { path: 'readme', component: ReadmeComponent },
  { path: 'post/:id', component: ArticleComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

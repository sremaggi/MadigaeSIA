import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import {CategoryFormComponent  } from "./components/category-form/category-form.component";

const routes: Routes = [

  {
    path: '',
    component: SidenavComponent
  },
  {
    path: 'product',
    component: SidenavComponent
  },
  {
    path: 'product/create',
    component: ProductFormComponent 
  },
  {
    path: 'product/edit/:id',
    component: ProductFormComponent
  },

  {
    path:'category/create',
    component:CategoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//aqui é a sessão onde muda os router links

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },{
    path:"products" ,
    component: ProductCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

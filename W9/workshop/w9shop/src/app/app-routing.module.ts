import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductsComponent } from './components/products/products.component';
import { UpdateProductsComponent } from './components/update-products/update-products.component';

const routes: Routes = [
  {path:'', component:AddProductsComponent},
  {path:'list', component:ProductsComponent},
  {path:'update', component:UpdateProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

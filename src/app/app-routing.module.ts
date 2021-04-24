import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { SaveProductComponent } from './components/save-product/save-product.component';

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/save",
    component: SaveProductComponent
  },
  {
    path: "products/save/:id",
    component: SaveProductComponent
  },
  {
    path: "",
    redirectTo: "products",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

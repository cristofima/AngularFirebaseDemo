import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPrimeNgModule } from './app.primeng.module';
import { ProductsComponent } from './components/products/products.component';
import { SaveProductComponent } from './components/save-product/save-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SaveProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppPrimeNgModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  saveProductSubject: Subject<ProductModel> = new Subject<ProductModel>();
  saveProductObservable = this.saveProductSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get<ProductModel[]>(environment.baseUrl+'/Products');
  }

  getProduct(productId: number){
    return this.httpClient.get<ProductModel>(environment.baseUrl+'/Products/'+productId);
  }

  addProduct(payload: ProductModel){
    return this.httpClient.post<ProductModel>(environment.baseUrl+'/Products', payload);
  }

  updateProduct(payload: ProductModel){
    return this.httpClient.put<ProductModel>(environment.baseUrl+'/Products/'+payload.productId, payload);
  }

  deleteProduct(productId: number){
    return this.httpClient.delete(environment.baseUrl+'/Products/'+productId);
  }
}

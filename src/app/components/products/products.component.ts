import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[];
  productIdToUpdate: number;
  loading: boolean;
  displayDialog: boolean;

  formGroup: FormGroup;

  constructor(
    private productService: ProductService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getProducts().subscribe(res =>{
      this.products = res;
      this.loading = false;
    });

    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      name: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])),
      price: new FormControl(null, Validators.compose([Validators.required, Validators.min(0.01)])),
      stock: new FormControl(null, Validators.compose([Validators.required, Validators.min(0)])),
      enabled: new FormControl(false),
      description: new FormControl(null),
      expirationDate: new FormControl(null, Validators.compose([Validators.required]))
    });
  }

  showDialog(product?: ProductModel){
    this.productIdToUpdate = product ? product.productId : null;
    this.displayDialog = true;

    this.formGroup.controls["name"].setValue(product ? product.name: null);
    this.formGroup.controls["price"].setValue(product ? product.price: null);
    this.formGroup.controls["stock"].setValue(product ? product.stock : null);
    this.formGroup.controls["enabled"].setValue(product ? product.enabled : false);
    this.formGroup.controls["expirationDate"].setValue(product ? new Date(product.expirationDate) : null);
    this.formGroup.controls["description"].setValue(product ? product.description : null);
  }

  deleteProduct(productId: number){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete the product?',
      accept: () => {
        this.productService.deleteProduct(productId).subscribe(()=>{
          this.products = this.products.filter(x => x.productId != productId);
        });
      }
    });
  }

  saveProduct(){
    if(this.productIdToUpdate){
      let payload: ProductModel = {
        ...this.formGroup.value,
        productId: this.productIdToUpdate
      };

      this.productService.updateProduct(payload).subscribe(res =>{
        let index = this.products.findIndex(x => x.productId == res.productId);
        if(index >= 0){
          this.products[index] = res;
        }

        this.displayDialog = false;
      });
    }else{
      let payload: ProductModel = {
        ...this.formGroup.value
      };

      this.productService.addProduct(payload).subscribe(res =>{
        this.products.push(res);
        this.displayDialog = false;
      });
    }
  }

}

import {Component, OnInit, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product/product-service.service';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.styl']
})
export class AddProductDialogComponent implements OnInit {
  @Output()
  uploaded = new EventEmitter<string>();
  description: any;
  title: any;
  price: any;
  category: any;
  public newOfferPhoto: string;
  public showSpinner = false;
  public stock: number;
  private newOfferFile: File;
  uploadComplete() {
    this.uploaded.emit('complete');
  }
  constructor( public productDetailsDomSanitizer: DomSanitizer, public productService: ProductService) { }

  ngOnInit(): void {
  }
  openImgFile(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      this.newOfferPhoto = data.toString();
      return;
    };
    reader.readAsDataURL(input.files[0]);
    this.newOfferFile = event.target.files[0];
  }
  addProduct() {
    const newProduct = new Product();
    newProduct.title = this.title;
    newProduct.description = this.description;
    newProduct.price = this.price;
    newProduct.stock = this.stock;
    newProduct.category = this.category;
    this.showSpinner = true;
    this.productService.addProductOnBackend(newProduct).subscribe((addedProduct)=> {
      this.productService.addImageOnBackend(this.newOfferFile, addedProduct.id).subscribe(()=>{
        this.showSpinner = false;
        this.uploadComplete();
      })
      });
  }
}

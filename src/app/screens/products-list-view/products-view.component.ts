import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product/product-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { formatCurrency } from '../../model/formatCurrency';
import {CartService} from '../../services/cart/cart.service';
import {CategoriesService} from '../../services/categories/categories.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.styl']
})
export class ProductsViewComponent implements OnInit {
  public animation: any = 'fadeIn';
  public sortByOrder = '';
  public page: any;
  public tagsFilters: any[] = [];
  public viewType = 'list';
  public viewCol = 25;
  public items: Product[] = [];
  public allItems: Product[] = [];
  public products: Product[] = [];
  public tags: any[] = [];
  public colors: any[] = [];
  public showSpinner: any;
  formatCurrency: any = formatCurrency;
  selectedSorting: any;
  public categories: string[];
  public selectedCategory: any;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              public domSanitizer: DomSanitizer,
              public router: Router,
              public cartService: CartService,
              public categoriesService: CategoriesService) {}
  ngOnInit() {
    this.showSpinner = true;
    this.route.params.subscribe(
      (params: Params) => {
        let category = params.category;
        category = 'all';
        console.log(JSON.stringify(category));
      }
    );

    this.categoriesService.getCategoriesFromBackend().subscribe((values)=>{
      this.categories = values;
    })

    this.productService.getProductsFromBackend().subscribe(products => {
      this.allItems = products;
      this.products = products;
      this.showSpinner = false;
    });
  }

  public changeViewType(viewType, viewCol) {
    this.viewType = viewType;
    this.viewCol = viewCol;
  }
  // Animation Effect fadeIn
  public fadeIn() {
    this.animation = 'fadeIn';
  }

  // Animation Effect fadeOut
  public fadeOut() {
    this.animation = 'fadeOut';
  }


  public onChangeSorting(val) {
    this.sortByOrder = this.selectedSorting;
  }

  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  addItemToCart(product: any) {
    this.cartService.addToCart(product, 1);
  }

  onChangeCategory(selectionChange: any) {
    this.showSpinner = true;
    if(this.selectedCategory !== 'all'){
      console.log(this.selectedCategory)
      this.products = this.allItems.filter( (item) => item.category===this.selectedCategory);
    }
    else{
      this.products =  this.allItems;
    }
    this.showSpinner = false;
  }
}

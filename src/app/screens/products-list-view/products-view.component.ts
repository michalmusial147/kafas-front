import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryFilter, Product } from '../../model/product';
import { ProductService } from '../../services/product/product-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { formatCurrency } from '../../model/formatCurrency';
import {CartService} from "../../services/cart/cart.service";

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
  public categoryFilters: CategoryFilter[] = [];
  public items: Product[] = [];
  public allItems: Product[] = [];
  public products: Product[] = [];
  public tags: any[] = [];
  public colors: any[] = [];
  public showSpinner: any;
  formatCurrency: any = formatCurrency;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              public domSanitizer: DomSanitizer,
              public router: Router,
              public cartService: CartService) {}

  ngOnInit() {
    this.showSpinner = true;
    this.route.params.subscribe(
      (params: Params) => {
        let category = params.category;
        category = 'all';
        console.log(JSON.stringify(category));
      }
    );
    this.productService.getProductsFromBackend().subscribe(products => {
      this.allItems = products;
      this.products = products.slice(0.8);
      this.getTags(products);
      this.getColors(products);
      this.showSpinner = false;
    });
  }

  // Get current product tags
  public getTags(products) {
    const uniqueBrands = [];
    const itemBrand = Array();
    products.map((product, index) => {
      if (product.tags) {
        product.tags.map((tag) => {
          const index = uniqueBrands.indexOf(tag);
          if (index === -1) {  uniqueBrands.push(tag); }
        });
      }
    });
    for (let i = 0; i < uniqueBrands.length; i++) {
      itemBrand.push({brand: uniqueBrands[i]});
    }
    this.tags = itemBrand;
  }

  public getColors(products) {
    const uniqueColors = [];
    const itemColor = Array();
    products.map((product, index) => {
      if (product.colors) {
        product.colors.map((color) => {
          const index = uniqueColors.indexOf(color);
          if (index === -1) {  uniqueColors.push(color); }
        });
      }
    });
    for (let i = 0; i < uniqueColors.length; i++) {
      itemColor.push({color: uniqueColors[i]});
    }
    this.colors = itemColor;
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
    this.sortByOrder = val;
  }

  // Initialize filetr Items
  public filterItems(): Product[] {
    return this.items.filter((item: Product) => {
      const Colors: boolean = this.categoryFilters.reduce((prev, curr) => { // Match Color
        if (item.colors) {
          if (item.colors.includes(curr.color)) {
            return prev && true;
          }
        }
      }, true);
      const Tags: boolean = this.tagsFilters.reduce((prev, curr) => { // Match Tags
        if (item.tags) {
          if (item.tags.includes(curr)) {
            return prev && true;
          }
        }
      }, true);
      return Colors && Tags; // return true
    });
  }
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }

  addItemToCart(product: any) {
    this.cartService.addToCart(product, 1);
  }
}

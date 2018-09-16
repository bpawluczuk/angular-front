import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {Product} from '../../Types/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productsService: ProductsService) {
  }

  products: Product[];

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList(): void {
    this.productsService.getProductsList()
      .subscribe(products => {
        if (products['status'] === 'ok') {
          this.products = products['data'];
        } else {
          this.products = null;
        }
      });
  }
}

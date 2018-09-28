import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {Product} from '../../Types/product';
import {interval, of} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productsService: ProductsService) {
  }

  products: Product[];
  test: string;

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList(): void {

    const apiData = this.productsService.getProductsList().pipe(
      retry(3),
      map(products => {
        if (!products['status']) {
          throw new Error('Value expected!');
        }
        this.products = products['data'];
        return products;
      }),
      catchError(err => of([]))
    );

    apiData.subscribe({
      next(products) {
        this.products = products['data'];
        console.log('data: ', products);
      },
      error(err) {
        console.log('errors already caught... will not run');
      }
    });

    // this.productsService.getProductsList()
    //   .subscribe(products => {
    //     if (products['status'] === 'ok') {
    //       this.products = products['data'];
    //     } else {
    //       this.products = null;
    //     }
    //   });

  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../Types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  private productsUrl = 'http://symfony-api.localhost/api/pl/v1/products/list';

  getProductsList(): Observable<Product> {
    return this.http.get<Product>(this.productsUrl);
  }
}

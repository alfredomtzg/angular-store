import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/product.model';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {}

  getAllProducts() {
    return this.http.get<Product[]>(environment.url_api);
  }
  getProductById(id: string) {
    return this.http.get<Product>(`${environment.url_api}${id}`);
  }
}

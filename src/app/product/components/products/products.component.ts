import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService
    ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      console.log(products);
      
      this.products = products;
    });
  }

  clickProduct(id: number) {
    console.log(id);
  }
}

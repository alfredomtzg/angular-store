import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((product) => {
      this.products = product;
    });
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((response) => {
      console.log(response);
      // this.fetchProducts();
      this.products = this.products.filter(item => item.id !== id)
    });
  }
}

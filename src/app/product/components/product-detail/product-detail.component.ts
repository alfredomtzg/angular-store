import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.fetchProduct(params.id)
      // this.product = this.productsService.getProductById(params.id);
      // console.log(this.product);
      
      
    })
  }

  fetchProduct(id: string) {
    this.productsService.getProductById(id)
    .subscribe(product => {
      console.log(product);
      this.product = product;

    })
  }


}

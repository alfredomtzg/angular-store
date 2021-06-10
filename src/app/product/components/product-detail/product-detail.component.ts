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

  createProduct(){
    const newProduct: Product = {
      id: '222',
      title: ' nuevo desde angular',
      image: 'https://picsum.photos/200/300',
      price: 3000,
      description: 'desde México'
    }
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    })

  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      image: 'https://picsum.photos/500/700',
      price: 3000,
      description: 'Edición images update'
    }
    this.productsService.updateProduct('222', updateProduct)
    .subscribe(product => {
      console.log(product);
    })
  }

  deleteProduct() {
    this.productsService.deleteProduct('222')
    .subscribe(product => {
      console.log(product);
    })
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productAddCart: EventEmitter<number> = new EventEmitter();

  addCart(): void {
    this.productAddCart.emit(this.product.id);
  }
}

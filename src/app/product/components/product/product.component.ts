import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productAddCart: EventEmitter<string> = new EventEmitter();

  today = new Date();


  constructor(
    private cartService: CartService
  ) {
    console.log('1. Constructor');
  }

  // ngOnChanges(change) {
  //   console.log('2. OnChanges');
  //   console.log(change);
  // }
  ngOnInit() {
    // console.log('3. OnInit');
  }
  ngDoCheck() {
    // console.log('4. DoCheck');
  }
  ngOnDestroy(){
    // console.log('5. OnDestroy');
    
  }

  addCart(): void {
    this.cartService.addCart(this.product)
    this.productAddCart.emit(this.product.id);
  }
}

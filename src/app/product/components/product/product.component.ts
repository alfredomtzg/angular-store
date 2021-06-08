import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productAddCart: EventEmitter<number> = new EventEmitter();

  today = new Date();


  constructor() {
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
    this.productAddCart.emit(this.product.id);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MyValidator} from 'src/app/utils/validators'
@Component({
  selector: 'app-edit-form-product',
  templateUrl: './edit-form-product.component.html',
  styleUrls: ['./edit-form-product.component.scss']
})
export class EditFormProductComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params.id;
      this.productsService.getProductById(this.id)
      .subscribe(products => {
        this.form.patchValue(products)
      })
    })
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidator.isPriceValid]],
      // image: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService
        .updateProduct(this.id, this.form.value)
        .subscribe((response) => {
          console.log(response);
          this.router.navigate(['./admin/products'])
        });
    }
  }

  get priceField() {
    return this.form.get('price');
  }
}

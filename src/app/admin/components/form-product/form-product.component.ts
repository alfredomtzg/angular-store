import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidator } from 'src/app/utils/validators'
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productsService: ProductsService,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void { }

  uploadFile(event: any) {
    const file = event.target.files[0];
    const name = 'images';
    const fileRef = this.angularFireStorage.ref(name);
    const task = this.angularFireStorage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(()=>{
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe((url)=> {
          console.log(url);
          
          this.form.get('image').setValue(url);
        })
      })
    )
    .subscribe();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidator.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService
        .createProduct(this.form.value)
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

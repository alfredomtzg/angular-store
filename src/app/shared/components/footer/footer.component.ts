import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  emailInput: FormControl;

  constructor() {
    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(4),
    ]);
  }

  ngOnInit(): void {}

  registerMail(){
    console.log(this.emailInput.value);
    
  }
  getErrorMessage() {
    if (this.emailInput.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailInput.hasError('email') ? 'Not a valid email' : '';
  }
}

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
      Validators.minLength(4),
      Validators.maxLength(10),
    ]);
  }

  ngOnInit(): void {}

  registerMail(){
    console.log(this.emailInput.value);
    
  }
}

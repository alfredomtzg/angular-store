import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormProductComponent } from './edit-form-product.component';

describe('EditFormProductComponent', () => {
  let component: EditFormProductComponent;
  let fixture: ComponentFixture<EditFormProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

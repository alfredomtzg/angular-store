import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alfredo';
  items = ['Alfredo', 'Ixchel', 'Porfirio'];
  addItem():void {
    this.items.push('nuevo item perrón ');
  }
  deleteItem(index: number): void {
    this.items.splice(index, 1)
  }
}

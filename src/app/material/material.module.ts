import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule],
})
export class MaterialModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}

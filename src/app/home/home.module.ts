import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [SharedModule, CommonModule, HomeRoutingModule ],
  // exports: [BannerComponent, HomeComponent]
})
export class HomeModule {}

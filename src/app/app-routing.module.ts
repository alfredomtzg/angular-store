import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    
  },
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'products',
    component: ProductsComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  },
  {
    path : 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

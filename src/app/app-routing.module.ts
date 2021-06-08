import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'demo',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./admin/admin.module').then((m)=> m.AdminModule),
  },
  {
    path: '**',
    component: PageNotfoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

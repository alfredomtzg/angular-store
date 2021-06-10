import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditFormProductComponent } from './components/edit-form-product/edit-form-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { GragDropComponent } from './components/grag-drop/grag-drop.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'tree',
        component: TreeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'drag-drop',
        component: GragDropComponent,
      },
      {
        path: 'products',
        component: ProductsListComponent,
      },
      {
        path: 'products/create',
        component: FormProductComponent,
      },
      {
        path: 'products/edit/:id',
        component: EditFormProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

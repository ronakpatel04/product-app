import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MainComponent } from './main/main.component';
import { BatchManagementComponent } from './batch-management/batch-management.component';
import { CodeManagementComponent } from './code-management/code-management.component';

const routes: Routes = [
  
  { path: 'products', component: ProductListComponent },
  {path:'batches' , component:BatchManagementComponent},
  {path:'codes', component:CodeManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

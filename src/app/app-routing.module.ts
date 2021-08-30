import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegistrationComponent } from './registration/registration.component';
 

const routes: Routes = [
  {
    path: 'product',
    component: ProductDetailsComponent,
   },
   {
    path: 'register',
    component: RegistrationComponent,
   },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



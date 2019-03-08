import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryComponent, AdminLoginComponent, AdminRegisterComponent, AddProductComponent]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';

import{LoginComponent} from 'src/app/login/login.component';
import{ForgotPasswordComponent} from 'src/app/login/forgot-password/forgot-password.component';
import{RegisterComponent} from 'src/app/login/register/register.component';
import{AdminLayoutComponent}from 'src/app/admin/admin-layout/admin-layout.component'; 

const routes: Routes = [
  { path: '',redirectTo: 'login',pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-pw', component: ForgotPasswordComponent },
  {path:'admin',component:AdminLayoutComponent,loadChildren:'src/app/admin/admin.module#AdminModule'},
  { path: '**',redirectTo: 'login',pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

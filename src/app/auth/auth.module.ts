import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    LoginComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    CheckboxModule,
    ButtonModule,
    PasswordModule,
    InputTextModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { RoleComponent } from './components/role/role.component';
import { SecurityRoutingModule } from './security-routing.module';



@NgModule({
  declarations: [
    UserComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }

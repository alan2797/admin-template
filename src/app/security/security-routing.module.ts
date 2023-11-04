import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RoleComponent } from './components/role/role.component';

@NgModule({
    imports: [
        RouterModule.forChild([
          {
            path: '', redirectTo: "usuario", pathMatch: 'full'
          },
          {
              path: 'usuario', component: UserComponent,
          },
          {
              path: 'rol', component: RoleComponent
          }
        ])
    ],
    exports: [RouterModule]
})
export class SecurityRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'login', component: LoginComponent,
            },
            {
                path: 'error', component: ErrorComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}

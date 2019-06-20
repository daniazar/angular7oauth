import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { DribbleGuard, F5Guard, AuthGuard } from './_guards';
import { LoginProviderComponent } from './login-provider/login-provider.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'dirbble', component: HomeComponent, canActivate: [DribbleGuard] },
    { path: 'f5', component: HomeComponent, canActivate: [F5Guard] },
    { path: 'loginprovider', component: LoginProviderComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'autorization', component: AuthorizationComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);

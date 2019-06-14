import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'autorization', component: AuthorizationComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './module/home/component/home.component';
import { SignInComponent } from './module/sign-in/component/sign-in.component';
import { SignUpComponent } from './module/sign-up/component/sign-up.component';
import { AuthGuard } from './guard/auth-guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },

  // selain diatas redirect ke home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

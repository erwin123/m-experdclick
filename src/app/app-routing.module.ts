import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthguardService }  from './services/authguard.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: MainComponent, canActivate: [AuthguardService]},
  

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
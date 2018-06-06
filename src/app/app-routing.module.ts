import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthguardService } from './services/authguard.service';
import { LandingComponent } from './landing/landing.component';
import { AnchorComponent } from './anchor/anchor.component';
import { DailyBoardComponent } from './daily-board/daily-board.component';
import { HistoryComponent } from './history/history.component';
import { SummaryComponent } from './summary/summary.component';

const appRoutes: Routes = [
  
  { path: 'main', component: MainComponent,
    children: [
      { path: 'landing', component: LandingComponent},
      { path: 'login', component: LoginComponent },
      { path: 'anchor', component: AnchorComponent },
      { path: 'daily', component: DailyBoardComponent, canActivate: [AuthguardService] },
      { path: 'history', component: HistoryComponent, canActivate: [AuthguardService] },
      { path: 'summary', component: SummaryComponent, canActivate: [AuthguardService] }
  ]},
  // { path: '', component: MainComponent, canActivate: [AuthguardService]},

  // otherwise redirect to home
  { path: '**', redirectTo: 'main/landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
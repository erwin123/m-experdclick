import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthguardService } from './services/authguard.service';
import { LandingComponent } from './landing/landing.component';
import { NguCarouselModule } from '@ngu/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { DrawerComponent } from './drawer/drawer.component';
import { FooterComponent } from './footer/footer.component';
import { MeaningclickComponent } from './meaningclick/meaningclick.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AnchorComponent } from './anchor/anchor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    LandingComponent,
    CarouselComponent,
    DrawerComponent,
    FooterComponent,
    MeaningclickComponent,
    AnchorComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NguCarouselModule,
    ScrollToModule.forRoot()
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

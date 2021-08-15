import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ImgHeroComponent } from './shared/img-hero/img-hero.component';
import { MainCardComponent } from './pages/main-card/main-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImgHeroComponent,
    MainCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

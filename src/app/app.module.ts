import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CharDetailsComponent } from './pages/char-details/char-details.component';
import { FooterComponent } from './pages/footer/footer.component';
import { mainCardComponent } from './shared/main-card/main-card.component';
import { CharStoriesComponent } from './pages/char-stories/char-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharDetailsComponent,
    FooterComponent,
    mainCardComponent,
    CharStoriesComponent,
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

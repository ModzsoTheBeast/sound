import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MusicPlayerComponent } from './pages/landing-page/music-player/music-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuelModule } from './modules/material-moduel/material-module.module';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ScrolltotopComponent } from './pages/landing-page/scrolltotop/scrolltotop.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';
import { IvyGalleryModule } from 'angular-gallery';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainLayoutComponent,
    MusicPlayerComponent,
    ContactComponent,
    FooterComponent,
    ScrolltotopComponent,
    GalleryComponent,
    AboutmeComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuelModule,
    FormsModule,
    IvyGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


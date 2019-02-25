import { CarddataService } from './carddata.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidenavResponsiveExampleComponent } from './sidenav-responsive-example/sidenav-responsive-example.component';
import { CardFancyExampleComponent } from './card-fancy-example/card-fancy-example.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';
import { Card6Component } from './card6/card6.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SidenavResponsiveExampleComponent,
    CardFancyExampleComponent,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    Card6Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MaterialModule
  ],
  providers: [CarddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

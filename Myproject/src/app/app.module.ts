import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from './shared/shared.module';
import { TableComponent } from './pipes/table/table.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [  //components,directives,pipes
    AppComponent, 
    HomeComponent,
    LandingComponent,
    PagenotfoundComponent,
    GalleryComponent,
    TableComponent
   
  
  ],
  imports: [    //modules
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

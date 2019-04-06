import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './imports/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleMaterialSliderComponent } from './components/sample-material-slider/sample-material-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleMaterialSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

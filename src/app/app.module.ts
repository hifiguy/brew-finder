import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
  apiKey: 'AIzaSyD1kXfJRlIGWLr4yxBPXIiZ_hkhhXYGSgw'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

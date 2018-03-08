import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccessControlLog } from './services/sports-service';

import { AppComponent } from './app.component';
import { LogFormComponent } from './log-form/log-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccessControlLog],
  bootstrap: [AppComponent]
})
export class AppModule { }

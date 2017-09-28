import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogFormComponent } from './log-form/log-form.component';
import { AccescontrollogService } from './service/accescontrollog.service';


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
  providers: [AccescontrollogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

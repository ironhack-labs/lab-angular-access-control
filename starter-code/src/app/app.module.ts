import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccessControlLogComponent } from './access-control-log/access-control-log.component';
import { LogFormComponent } from './log-form/log-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessControlLogComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

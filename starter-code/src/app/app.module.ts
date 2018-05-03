import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccessControlLogComponent } from './access-control-log/access-control-log.component';
import { LogFormComponentComponent } from './log-form-component/log-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessControlLogComponent,
    LogFormComponentComponent
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

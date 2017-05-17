import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccessControlComponent } from './access-control/access-control.component';
import { FormComponent } from './form/form.component';
import { accessControl } from './accessControlService';

@NgModule({
  declarations: [
    AppComponent,
    AccessControlComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [accessControl],
  bootstrap: [AppComponent]
})
export class AppModule { }

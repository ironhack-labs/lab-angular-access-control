import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntradaFormComponent } from './entrada-form/entrada-form.component';

//Servicios
import { PersonalAccessService } from './personal-access.service'

@NgModule({
  declarations: [
    AppComponent,
    EntradaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PersonalAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }

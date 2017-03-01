import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccesControl } from './services/accesscontrol.service';
import { MyAccesComponent } from './my-acces/my-acces.component';
import { MyLogformComponent } from './my-logform/my-logform.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAccesComponent,
    MyLogformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccesControl],
  bootstrap: [AppComponent]
})
export class AppModule { }

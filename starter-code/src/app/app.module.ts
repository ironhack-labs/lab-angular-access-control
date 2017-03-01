import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccessControlLog} from './services/access.service';


import { AppComponent } from './app.component';
import { AccessRegisterComponent } from './access-register/access-register.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessRegisterComponent
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

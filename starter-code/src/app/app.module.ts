import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccesscontrollogService } from './services/accesscontrollog.service'
import { AppComponent } from './app.component';
import { LogformcomponentComponent } from './logformcomponent/logformcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    LogformcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccesscontrollogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

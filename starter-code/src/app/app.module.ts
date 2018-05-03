import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

import { AccessService } from './services/access.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [AccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }

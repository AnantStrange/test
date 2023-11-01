import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Navbar} from './Navbar/navbar.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent[Symbol],
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

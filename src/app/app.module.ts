import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Header } from './Header/Header.component';
import { MainComponent } from './main/main.component';
import { section } from './section/section.component';
import { ToHeaderComponent } from './to-header/to-header.component';
import { InnerHeaderComponent } from './to-header/inner-header/inner-header.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { counter } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    // Header,
    // MainComponent,
    // section,
    // ToHeaderComponent,
    // InnerHeaderComponent,
    ProductlistComponent,
    counter

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

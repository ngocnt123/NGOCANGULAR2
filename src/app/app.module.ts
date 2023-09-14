import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgforofComponent } from './components/ngforof/ngforof.component';

@NgModule({
  declarations: [
    AppComponent,
    IfElseComponent,
    HomepageComponent,
    DataBindingComponent,
    NgforofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

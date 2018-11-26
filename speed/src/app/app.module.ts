import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import { SearchComponent } from './search/search.component';
import { SearchPresenterComponent } from './search-presenter/search-presenter.component';
import { StandardComponent } from './standard/standard.component';
import { StatusComponent } from './status/status.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { TypesComponent } from './types/types.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    SearchComponent,
    SearchPresenterComponent,
    StandardComponent,
    StatusComponent,
    AgenciesComponent,
    TypesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

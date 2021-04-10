import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TopMenuComponent } from './pages/top-menu/top-menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { StartComponent } from './pages/start/start.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryComponent } from './pages/country/country.component';
import { CountryDetailsComponent } from './pages/country/country-details/country-details.component';
import { AboutComponent } from './pages/about/about.component';
import { CountriesComponent } from './pages/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    StartComponent,
    PageNotFoundComponent,
    RegionComponent,
    CountryComponent,
    CountryDetailsComponent,
    AboutComponent,
    CountriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

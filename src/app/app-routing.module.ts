import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { CountryComponent } from './pages/country/country.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'country', component: CountryComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

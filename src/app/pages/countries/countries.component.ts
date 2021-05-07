import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable, pipe } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Country } from 'src/app/models/country';
import { ErrorMsg } from 'src/app/models/errorMsg';
import { Region } from 'src/app/models/region';
import { RouteParams } from 'src/app/models/routeParams';

import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpService
  ) { }

  public region = '';
  public countries$?: Observable<Country[]>;
  public country?: Country;
  public loading = false;
  public displayCoutry = false;
  public error?: ErrorMsg;


  ngOnInit() {
    this.GetRegion();
    this.GetCountries();
  }

  public GetCountries(): void {
    this.countries$ = this.http.getCountries(this.region);
  }

  private GetRegion(): void {
    const defaultRegion = "Europe";
    this.region = this.activatedRoute.snapshot.paramMap.get('id') || defaultRegion;
  }

  public StopDisplayLoading(): void {
    this.loading = false;
  }

  public DisplayCountryDetails(country: Country): void {
    this.country = country;
    this.displayCoutry = true;
  }

  public CloseCountryDetails(): void {
    this.displayCoutry = false;
  }
}

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
  ) {}

  public region$?: Observable<string>;
  public countries$?: Observable<Country[]>;
  public country?: Country;
  public loading = false;
  public displayCoutry = false;
  public error?: ErrorMsg;

  ngOnInit(): void {
    this.countries$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.http.getCountries(params.get('id') || 'europe')
      )
    );
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

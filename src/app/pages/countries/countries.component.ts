import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { Country } from 'src/app/models/country';
import { ErrorMsg } from 'src/app/models/errorMsg';
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

  public loading = true;
  public region = '';
  public countries: Country[] = [];
  public country?: Country;
  public displayCoutry = false;
  public error?: ErrorMsg;

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe(
        (res: RouteParams) => {
          this.region = res.region;
          this.GetCountries();
        },
        (error) => (this.error = error)
      );
  }

  public GetCountries(): void {
    this.http.getCountries(this.region).subscribe(
      (res) => (this.countries = res),
      (error) => (this.error = error),
      () => this.StopDisplayLoading()
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

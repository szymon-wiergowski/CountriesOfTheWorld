import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
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
    public activatedRoute: ActivatedRoute,
    private http: HttpService
  ) {}

  public routerState$?: Observable<RouteParams>;
  public loading: boolean = true;
  public region = '';
  public countries: Country[] = [];
  public country?: Country;
  public displayCoutry: boolean = false;
  public error?: ErrorMsg;

  ngOnInit() {
    this.routerState$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );
    this.routerState$?.subscribe((res) => (this.region = res.region));
    this.GetCountries(this.region);
  }

  public GetCountries(region: string) {
    this.http.getCountries(region).subscribe(
      (res) => {
        this.countries = res;
        if (!this.error && this.countries.length > 0) {
          this.StopDisplayLoading();
        }
      },
      (error) => (this.error = error)
    );
  }

  public StopDisplayLoading() {
    this.loading = false;
  }

  public DisplayCountryDetails(country: Country) {
    this.country = country;
    this.displayCoutry = true;
  }

  public CloseCountryDetails() {
    this.displayCoutry = false;
  }
}

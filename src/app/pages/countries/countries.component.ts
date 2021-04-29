import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

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

  public countries$?: Observable<Country[]>;
  public loading = true;
  public region = '';
  public country?: Country;
  public displayCoutry = false;
  public error?: ErrorMsg;

  ngOnInit(): void   {
    this.countries$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getCountries(params.get('id') || 'europe')
    ));
    // this.routerState$ = this.activatedRoute.paramMap.pipe(
    //   map(() => window.history.state)
    // );
  }

  // public GetCountries(region: string) {
  //   this.http.getCountries(region).subscribe(
  //     (res) => {
  //       this.countries = res;
  //       if (!this.error && this.countries.length > 0) {
  //         this.StopDisplayLoading();
  //       }
  //     },
  //     (error) => (this.error = error)
  //   );
  // }

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

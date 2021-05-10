import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { Country } from 'src/app/models/country';
import { ErrorMsg } from 'src/app/models/errorMsg';
import { Region } from 'src/app/models/region';

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

  public region: Partial<Region> = {};
  private defaultRegion = 'Europe';
  public countries$?: Observable<Country[]>;
  public country?: Country;
  public loading = true;
  public displayCoutry = false;
  public errorMsg?: ErrorMsg;


  ngOnInit(): void {
    this.GetRegion();
    this.GetCountries();
  }

  private GetRegion(): void {
    this.region.name = this.activatedRoute.snapshot.paramMap.get('id') || this.defaultRegion;
  }

  public GetCountries(): void {
    this.countries$ = this.http.getCountries(this.region.name as string).pipe(
      delay(400),
      catchError(err => {
        this.errorMsg = err;
        return throwError(err);
      })
    );
  }

  public DisplayCountryDetails(country: Country): void {
    this.country = country;
    this.displayCoutry = true;
  }

  public CloseCountryDetails(): void {
    this.displayCoutry = false;
  }
}

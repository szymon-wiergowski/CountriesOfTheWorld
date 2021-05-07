import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

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
  public loading = false;
  public displayCoutry = false;
  public error?: ErrorMsg;


  ngOnInit(): void {
    this.GetRegion();
    this.GetCountries();
  }

  private GetRegion(): void {
    this.region.name = this.activatedRoute.snapshot.paramMap.get('id') || this.defaultRegion;
  }

  public GetCountries(): void {
    this.countries$ = this.http.getCountries(this.region.name || this.defaultRegion);
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

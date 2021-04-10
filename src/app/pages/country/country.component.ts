import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from 'src/app/models/country';
import { RouteParams } from 'src/app/models/routeParams';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute, private http: HttpService
  ) {}

  public state$!: Observable<RouteParams>;
  public country!: Country;
  public error!: string;

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );
    let country = '';
    this.state$?.subscribe((res) => (country = res.country));
    this.GetCountry(country);
  }

  public GetCountry(country: string ){
    console.log(country)

    this.http.getCountry(country).subscribe(
      (res) => ((this.country = res)),
      (error) => (this.error = error)
    );
  }
}

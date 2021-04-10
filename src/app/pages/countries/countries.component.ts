import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from 'src/app/models/country';
import { RouteParams } from 'src/app/models/routeParams';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    private http: HttpService
  ) {}

  public state$?: Observable<RouteParams>;
  public region!: string;
  public countries?: Country[];
  public error?: string;

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );
    this.state$?.subscribe((res) => (this.region = res.region));
    this.GetCountries(this.region);
  }

  public GetCountries(region: string) {
    this.http.getCountries(region).subscribe(
      (res) => (this.countries = res),
      (error) => (this.error = error)
    );
  }

  public DisplayCountryDetails(name: string){
    const country = this.countries?.filter(el => el.name === name);
    this.router.navigate(['/country'], {
      state: { country: country },
    });
  }
}

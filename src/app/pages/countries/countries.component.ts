import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from 'src/app/models/country';
import { NavigationParams } from 'src/app/models/navigationsParams';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    private http: HttpService
  ) {}

  state$?: Observable<NavigationParams>;
  public region?: string;
  public countries?: Country[];
  public error?: string;

  ngOnInit() {
    let region = '';
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );

    this.state$?.subscribe(
      res => region = res.region);
    this.GetCountries(region)
  }

  public GetCountries(region: string) {
    this.http.getCountries(region).subscribe(
      (res) => ((this.countries = res), console.log(this.countries)),
      (error) => (this.error = error)
    );
  }
}

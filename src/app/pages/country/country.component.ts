import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Country } from 'src/app/models/country';
import { Currencies } from 'src/app/models/currencies';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  constructor() {}

  @Input() country?: Country;
  public name?: string;
  public flag?: string;
  public region?: string;
  public capital?: string;
  public population?: number;
  public currencies?: Currencies[];

  @Output() close: EventEmitter<null> = new EventEmitter();

  ngOnInit() {
    this.name = this.country?.name;
    this.flag = this.country?.flag;
    this.region = this.country?.region;
    this.capital = this.country?.capital;
    this.population = this.country?.population;
    this.currencies = this.country?.currencies;
  }

  BackToList(): void {
    this.close.emit(null);
  }
}

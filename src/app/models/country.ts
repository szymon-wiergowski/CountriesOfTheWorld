import { Currencies } from './currencies';

export interface Country {
  name: string;
  nativeName: string;
  region: string;
  capital: string;
  flag: string;
  population: number;
  currencies: Currencies[];
}

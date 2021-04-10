import { Currencies } from './currencies';
import { Languages } from './languages';

export interface Country {
  name: string;
  nativeName: string;
  region: string;
  capital: string;
  flag: string;
  population: number;
  languages: Languages[];
  currencies: Currencies[];
}

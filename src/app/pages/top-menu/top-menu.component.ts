import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent {
  constructor(public location: Location) {}

  public goToBack(): void {
    if (this.location.path() === '/countries') {
      this.location.back();
    }
  }
}

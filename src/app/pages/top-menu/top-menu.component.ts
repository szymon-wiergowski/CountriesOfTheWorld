import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  constructor(public location: Location, public store: Store<{ disp: boolean }>) {
    this.dispplayButton$ = store.select('disp');
  }

  dispplayButton$: Observable<boolean>;

  ngOnInit(): void {}

  public GoToBack(): void {
      this.location.back();
  }
}

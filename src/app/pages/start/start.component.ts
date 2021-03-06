import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { hideBackButton, showBackButton } from '../../actions/display.actions';

import { Region } from 'src/app/models/region';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit, OnDestroy {

  constructor(public store: Store<{ disp: boolean }>) {
    this.dispplayButton$ = store.select('disp');
  }
  dispplayButton$: Observable<boolean>;
  regions: Region[] = [
    { name: 'Americas' },
    { name: 'Europe' },
    { name: 'Asia' },
    { name: 'Africa' },
    { name: 'Oceania' },
  ];

  ngOnInit(): void {
    this.store.dispatch(hideBackButton());
  }

  ngOnDestroy(): void {
    this.store.dispatch(showBackButton());
  }
}

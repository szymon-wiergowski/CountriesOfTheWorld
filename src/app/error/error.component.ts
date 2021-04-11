import { Component, Input } from '@angular/core';
import { ErrorMsg } from '../models/errorMsg';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() error?: ErrorMsg;
}

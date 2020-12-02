import { Component } from '@angular/core';
import { Applicant } from './applicant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hmr-form-demo';
  applicant: Applicant = new Applicant();

  constructor() { }
}

import { Component } from '@angular/core';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading = false;

  constructor() { }

  ngOnInit() {
    this.loading = true;

  }
}

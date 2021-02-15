import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-restoration-form-dialog',
  templateUrl: './restoration-form-dialog.component.html',
  styleUrls: ['./restoration-form-dialog.component.styl']
})
export class RestorationFormDialogComponent implements OnInit {
  description  = '';
  campaignOne: FormGroup;
  userTelephone: any;
  userEmail: any;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 0)),
    });
  }

  ngOnInit(): void {
  }

}

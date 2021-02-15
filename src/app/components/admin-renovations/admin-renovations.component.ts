import { Component, OnInit } from '@angular/core';
import {RenovationsService} from '../../services/renovations/renovations.service';

@Component({
  selector: 'app-admin-renovations',
  templateUrl: './admin-renovations.component.html',
  styleUrls: ['./admin-renovations.component.styl']
})
export class AdminRenovationsComponent implements OnInit {

  public renovations = [];
  page: any;
  constructor(public renovationsService: RenovationsService) { }

  ngOnInit(): void {
    this.renovationsService.get().subscribe((result)=>{

     this.renovations = result;
      console.log(result);
    });
  }

  onPageChanged($event: number) {

  }
}

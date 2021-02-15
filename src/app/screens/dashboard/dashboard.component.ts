import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {Orientation} from '@ngbmodule/material-carousel';
import {ScreenTypeServiceService} from '../../services/screen-type-service/screen-type-service.service';
import {AddProductDialogComponent} from '../../components/add-product-dialog/add-product-dialog.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';
import {RestorationFormDialogComponent} from '../../components/restoration-form-dialog/restoration-form-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  public slidesList = [
    {
      title: 'Studio',
      description: 'Mieszlanie w kamienicy w centrum miasta, w najlepszej dzielnicy miasta, blisko dworca Fabrycznego.',
    },
    {
      title: 'Apartament nowy',
      description: 'Apartament na obrzeżach Teofilowa z widokiem na park.',
    },
    {
      title: 'Kawalerka',
      description: 'Kawalerka w sam raz dla ejdnej osoby lub młodej pary.',
    },
  ];
  public parentHeight = 'auto';
  public timings = '500ms ease-in';
  public autoplay = true;
  public interval = 2500;
  public loop = true;
  public hideArrows = true;
  public hideIndicators = false;
  public color: ThemePalette = 'primary';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 40;
  public slideHeight = '300px';
  public slides = this.slidesList.length;
  public overlayColor = '#00000000';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';

  constructor(public screenTypeServiceService: ScreenTypeServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  public onChange(index: number) {

  }

  showResorationForm() {
    const dialogRef = this.dialog.open(RestorationFormDialogComponent, {
      hasBackdrop: true

    });

  }
}

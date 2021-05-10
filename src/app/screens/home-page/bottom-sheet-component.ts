import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Component} from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

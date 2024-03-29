import { Injectable } from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingStateService {
  public loadingState = new ReplaySubject<boolean>();

  constructor() {
    console.log('constructor');
    this.loadingState.next(false);
  }

  setLoading(b: boolean) {
    console.log('setLoading: ' + b);
    this.loadingState.next(b);
  }
}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product-service.service';
import {LoadingStateService} from "../../loading-state-service/loading-state.service";

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.styl']
})
export class AppLoaderComponent implements  OnInit {
  showSpinner: any;
  loadingStateService: any;
  constructor(loadingStateService: LoadingStateService) {
    this.loadingStateService = loadingStateService;
  }

  ngOnInit() {
    const subscription = this.loadingStateService.loadingState.subscribe(status => {
      this.showSpinner = status;
    });
  }
}

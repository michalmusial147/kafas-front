        import { Component, OnInit } from '@angular/core';
        import {DomSanitizer} from '@angular/platform-browser';
        import {DictionaryService} from '../../services/dictionary/dictionary.service';
        import {Router} from '@angular/router';
        @Component({
          selector: 'app-app-searcher',
          templateUrl: './app-searcher.component.html',
          styleUrls: ['./app-searcher.component.styl']
        })
        export class AppSearcherComponent {
          public dictionary: DictionaryService;
          public searchParameter: any;
          constructor(dictionaryService: DictionaryService, public router: Router) {
            this.dictionary = dictionaryService;
          }

          searchForResults() {
            console.log(this.searchParameter);
            this.router.navigateByUrl('/loading', {skipLocationChange: true}).then(()=>
              this.router.navigate(['/products', {searchFor: this.searchParameter}]));
          }

        }

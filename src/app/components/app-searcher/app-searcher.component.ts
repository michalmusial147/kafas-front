import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {DictionaryService} from '../../services/dictionary/dictionary.service';

@Component({
  selector: 'app-app-searcher',
  templateUrl: './app-searcher.component.html',
  styleUrls: ['./app-searcher.component.styl']
})
export class AppSearcherComponent implements OnInit {
  public dictionary: DictionaryService;
  constructor(dictionaryService: DictionaryService) {
    this.dictionary = dictionaryService;
  }

  ngOnInit(): void {
  }

  searchForResults() {

  }
}

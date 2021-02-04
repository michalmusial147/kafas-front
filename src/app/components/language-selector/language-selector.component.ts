import {Component} from '@angular/core';
import {DictionaryService} from '../../services/dictionary/dictionary.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.styl']
})
export class LanguageSelectorComponent {
  translationService: DictionaryService;
  flagUrl: string;
  currentLang: string;
  constructor(dictionary: DictionaryService) {
    this.translationService = dictionary;
    this.setLanguage('Polish');
    this.currentLang = 'POLISH';
  }

  setLanguage(name: string) {
    switch (name) {
      case 'Polish':
        this.translationService.setPolish();
        this.setPolishFlag();
        this.currentLang = 'POLISH';
        break;
      case 'English':
        this.translationService.setEnglish();
        this.setEnglishFlag();
        this.currentLang = 'ENGLISH';
        break;
      default:
        break;
    }
  }

  setPolishFlag() {
    this.flagUrl = 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg';
  }

  setEnglishFlag() {
    this.flagUrl = 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg';
  }
}

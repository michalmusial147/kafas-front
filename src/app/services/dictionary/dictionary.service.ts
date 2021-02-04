import { Injectable } from '@angular/core';
import English from './English';
import Polish from './Polish';
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private dictionary;
  constructor() {
    this.dictionary = English;
  }
  getDictionary() {
    return this.dictionary;
  }
  public setPolish() {
   this.dictionary = Polish;
 }
  public setEnglish() {
    this.dictionary = English;
  }
}

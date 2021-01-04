import {OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

export abstract class HomePageComponent implements  OnInit {
  constructor(router: Router, sanitizer: DomSanitizer) {}
  ngOnInit(): void {
  }
}

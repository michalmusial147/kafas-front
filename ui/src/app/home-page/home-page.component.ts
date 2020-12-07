import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';


export abstract class HomePageComponent implements  OnInit{
  constructor(private router: Router, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
  }
}

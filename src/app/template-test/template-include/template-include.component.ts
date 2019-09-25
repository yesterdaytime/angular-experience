/**
 * This is the template component
 * You can add @Input , @Output and change some in this component.
 */

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-include',
  templateUrl: './template-include.component.html',
  styleUrls: ['./template-include.component.scss']
})
export class TemplateIncludeComponent implements OnInit {

  constructor() { }

  @ViewChild('shared1') shared1: ElementRef;
  @ViewChild('shared2') shared2: ElementRef;

  ngOnInit() {
  }
}

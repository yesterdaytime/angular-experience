import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent implements OnInit {

  constructor() { }

  default = {$implicit: 'This is template a and show the template with defuat key'};

  customer = {hello: 'This is template a and show the template with defuat key'};

  ngOnInit() {
  }

}

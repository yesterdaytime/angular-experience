import { Component, OnInit, Input, ContentChildren, TemplateRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-template-child',
  templateUrl: './template-child.component.html',
  styleUrls: ['./template-child.component.scss']
})
export class TemplateChildComponent implements OnInit {

  constructor() { }

  @Input() showTest1 = false;

  @ContentChildren(TemplateRef) query:  QueryList<TemplateRef<any>>;

  ngOnInit() {
  }

}

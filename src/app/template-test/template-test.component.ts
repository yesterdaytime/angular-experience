import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-template-test',
    templateUrl: './template-test.component.html',
    styleUrls: ['./template-test.component.scss']
})
export class TemplateTestComponent implements OnInit {

    constructor() { }

    layoutHorizontal = true;

    ngOnInit() {
    }

    changeLayout() {
        this.layoutHorizontal = !this.layoutHorizontal;
    }

}

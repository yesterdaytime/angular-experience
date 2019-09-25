import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-template-b',
    templateUrl: './template-b.component.html',
    styleUrls: ['./template-b.component.scss']
})
export class TemplateBComponent implements OnInit {

    constructor() { }

    default = { $implicit: 'This is template b and show the template with defuat key' };

    customer = { hello: 'This is template b and show the template with defuat key' };

    ngOnInit() {
    }

}

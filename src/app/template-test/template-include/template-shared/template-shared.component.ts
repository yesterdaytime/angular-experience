import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-template-shared',
    templateUrl: './template-shared.component.html',
    styleUrls: ['./template-shared.component.scss']
})
export class TemplateSharedComponent implements OnInit {

    constructor() { }

    @ViewChild('shared1') shared1: ElementRef;
    @ViewChild('shared2') shared2: ElementRef;

    ngOnInit() {
    }

}

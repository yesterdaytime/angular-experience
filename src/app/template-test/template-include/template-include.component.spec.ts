import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateIncludeComponent } from './template-include.component';

describe('TemplateIncludeComponent', () => {
  let component: TemplateIncludeComponent;
  let fixture: ComponentFixture<TemplateIncludeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateIncludeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

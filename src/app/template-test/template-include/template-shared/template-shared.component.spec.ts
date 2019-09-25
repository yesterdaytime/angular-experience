import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSharedComponent } from './template-shared.component';

describe('TemplateSharedComponent', () => {
  let component: TemplateSharedComponent;
  let fixture: ComponentFixture<TemplateSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

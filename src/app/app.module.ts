import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateTestComponent } from './template-test/template-test.component';
import { TemplateIncludeComponent } from './template-test/template-include/template-include.component';
import { TemplateContentComponent } from './template-test/template-content/template-content.component';
import { TemplateAComponent } from './template-test/template-include/template-a/template-a.component';
import { TemplateBComponent } from './template-test/template-include/template-b/template-b.component';
import { TemplateChildComponent } from './template-test/template-content/template-child/template-child.component';
import { CommonModule } from '@angular/common';
import { TemplateSharedComponent } from './template-test/template-include/template-shared/template-shared.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateTestComponent,
    TemplateIncludeComponent,
    TemplateContentComponent,
    TemplateAComponent,
    TemplateBComponent,
    TemplateChildComponent,
    TemplateSharedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

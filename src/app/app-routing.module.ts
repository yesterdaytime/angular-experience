import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateTestComponent } from './template-test/template-test.component';
import { TemplateContentComponent } from './template-test/template-content/template-content.component';

const routes: Routes = [
    { path: '', redirectTo: 'template-show', pathMatch: 'full' },
    { path: 'template-show', component: TemplateTestComponent },
    { path: 'template-content', component: TemplateContentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

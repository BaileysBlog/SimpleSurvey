import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SurveyRootComponent } from './survey-root/survey-root.component';

const routes: Routes = 
[
  { path: 'survey', component: SurveyRootComponent},
  { path: '',  redirectTo: '/survey', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { QuizComponent } from './components/core/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vacancies', component: HomeComponent },
  { path: 'quiz',component:QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

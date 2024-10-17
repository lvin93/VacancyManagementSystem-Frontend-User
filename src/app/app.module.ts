import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { HomeComponent } from './components/core/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApplyFormDialogComponent } from './components/dialogs/apply-form-dialog/apply-form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { QuizComponent } from './components/core/quiz/quiz.component';
import { ResumeDialogComponent } from './components/dialogs/resume-dialog/resume-dialog.component';
import { TimerComponent } from './components/core/timer/timer.component';
import { CommonModule } from '@angular/common';
import { QuizResultComponent } from './components/core/quiz-result/quiz-result.component';



@NgModule({
  declarations: [
    AppComponent,
    QuizResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatPaginator,
    HeaderComponent,
    HomeComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FooterComponent,
    HttpClientModule,
    ApplyFormDialogComponent,
    FormsModule,
    MatDialogModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatError ,
    QuizComponent,
    ResumeDialogComponent,
    TimerComponent,
    CommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


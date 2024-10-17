import {Component, Injectable, inject, numberAttribute} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperIntl, MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { QuestionServiceService } from '../../../services/question-service.service';
import { QuizServiceService } from '../../../services/quiz-service.service';
import { AsnwersServiceService } from '../../../services/asnwers-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ApiResponse, Question } from '../../../models/Question';
import { MatDialog } from '@angular/material/dialog';
import { ResumeDialogComponent } from '../../dialogs/resume-dialog/resume-dialog.component';
import { TimerComponent } from '../timer/timer.component';
import { SharedDataserviceService } from '../../../services/shared-dataservice.service';



@Injectable()
export class StepperIntl extends MatStepperIntl {
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
  providers: [{provide: MatStepperIntl, useClass: StepperIntl}],
  standalone: true,
  imports: [
    MatRadioModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    CommonModule,
    ResumeDialogComponent,
    TimerComponent,
    CommonModule
  ],

})
export class QuizComponent {


  
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;



  selectedAnswer: number | null = 0; 
  questions: any[] = []; 
  selectedQuestion: any; 
  questionsWithAnswers: any[] = [];   
  currentQuestionIndex: number = 0;
  selectedAnswers: number[] = []; 
  vacancyId:number | null =0;
  candidateId:number | null =0;
  answeredQuestions: boolean[] = []; 

  constructor(private quizService: QuizServiceService,
    private questionService:QuestionServiceService , 
    private answersService:AsnwersServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private sharedDataservice:SharedDataserviceService
  ) {}

  ngOnInit(): void {
      this.vacancyId = this.sharedDataservice.getVacancyId();
      this.candidateId = this.sharedDataservice.getCandidateId();
      this.loadQuestions(this.vacancyId);  


  }

  // Soruları yükle
  loadQuestions(vacancyId: number | null ) {
    this.questionService.getAllQuestionsForUserApi(vacancyId).subscribe({
      next: (response) => {
      this.questions=response.questions;
        this.questions.forEach((question: any) => {
          this.answersService.getAnswersByQuestionIdForUserApi(question.id).subscribe({
            next: (answersResponse) => {
              question.answers = answersResponse.answers; 

            },
            error: (error) => {
            }
          });
        });
          this.selectedAnswers = new Array(this.questions.length).fill(null); 
      },
      error: (error) => {
      }
    });
  }





  nextQuestion() {
    console.log(this.questions)
    console.log(this.currentQuestionIndex);
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
    console.log(this.currentQuestionIndex);
  }

  // Bir önceki soruya git
  previousQuestion() {
    console.log(this.currentQuestionIndex);
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
    console.log(this.currentQuestionIndex);
  }


  submitAnswer(questionId: number, selectedAnswer: number) {
    if (!selectedAnswer) {
      console.error('not selected');
    return;
  }

  const answerPostData = {
    questionId: questionId,
    answerOptionId: selectedAnswer,
    candidateId: this.candidateId,
    vacancyId:this.vacancyId
  };

  this.quizService.postAnswerDataApi(answerPostData).subscribe({
      next: (response) => {
        this.answeredQuestions[this.currentQuestionIndex] = true;
      },
      error: (error) => {
        console.error('error', error);
      }
    });
  }



  openResumeDialog(){
    const dialogRef = this.dialog.open(ResumeDialogComponent, {
      width: '300px',
      data: { candidateId: this.candidateId, vacancyId: this.vacancyId }, 
      disableClose: true
    });
  }



}

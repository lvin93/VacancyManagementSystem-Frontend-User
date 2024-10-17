import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { AsnwersServiceService } from './asnwers-service.service';
import { QuestionServiceService } from './question-service.service';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  private baseUrl = environment.baseUrl;
  private postAnswerDataApiUrl = this.baseUrl+ '/Answer/AcceptAnswer';
  constructor(private http: HttpClient, private answerService: AsnwersServiceService,private questionService:QuestionServiceService) { }

  postAnswerDataApi(data:any){
    return this.http.post(this.postAnswerDataApiUrl, data).pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Xəta yarandı !';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.error && error.error.errorMessage) {
        errorMessage = error.error.errorMessage; 
      } else {
        errorMessage = `Server xətası: ${error.status}\nMesaj: ${error.message}`;
      }
    }
      alert(errorMessage);
      return throwError(errorMessage);
    }

}

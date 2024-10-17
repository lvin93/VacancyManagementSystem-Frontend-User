import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { ApiResponse } from '../models/Question';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  private baseUrl = environment.baseUrl;

  private getAllQuestionsForUserApiUrl = this.baseUrl+ '/Question/GetByVacancyIdForUser';
  private createQuestionApiUrl = this.baseUrl+ '/Question/Create';


  constructor(private http: HttpClient) { }

  getAllQuestionsForUserApi(id: number | null ): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.getAllQuestionsForUserApiUrl}?VacancyId=${id}`);
  }


  postQuestion(data:any){
    return this.http.post(this.createQuestionApiUrl, data).pipe(catchError(this.handleError));
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

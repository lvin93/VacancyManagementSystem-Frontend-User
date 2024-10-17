import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class AsnwersServiceService {
  private baseUrl = environment.baseUrl;

  private getAnswersByQuestionIdForUserApiUrl = this.baseUrl+ '/Answer/GetAnswersByQuestionIdForUser';
  constructor(private http: HttpClient) { }

  getAnswersByQuestionIdForUserApi(questionId: number): Observable<any> {
    return this.http.get<any>(`${this.getAnswersByQuestionIdForUserApiUrl}?questionId=${questionId}`);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class VacancyServiceService {
  private baseUrl = environment.baseUrl;

  private vacanciesApi = this.baseUrl+ '/Vacancy/GetAll';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.vacanciesApi);
  }
  
}
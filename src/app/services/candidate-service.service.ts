import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {
  private baseUrl = environment.baseUrl;

  private getAllCandidatesApiUrl = this.baseUrl+ '/Candidate/GetAll';
  private createCandidateApiUrl = this.baseUrl+ '/Candidate/Create'; 
  private addResumeApiUrl = this.baseUrl+ '/Candidate/AddResume'; 


  constructor(private http: HttpClient) { }

  getAllCandidatesApi(): Observable<any> {
    return this.http.get<any>(this.getAllCandidatesApiUrl);
  }


  postCandidate(data:any){
    return this.http.post(this.createCandidateApiUrl, data).pipe(catchError(this.handleError));
  }


  postResume(formData:FormData){
    return this.http.post(this.addResumeApiUrl, formData).pipe(catchError(this.handleError));
  }


 private handleError(error: HttpErrorResponse) {
  let errorMessage = 'Bilinmeyen bir hata oluştu!';
  
  if (error.error instanceof ErrorEvent) {
    errorMessage = `Error: ${error.error.message}`;
  } else {
    if (error.error && error.error.errorMessage) {
      errorMessage = error.error.errorMessage; 
    } else {
      errorMessage = `Sunucu hatası: ${error.status}\nMesaj: ${error.message}`;
    }
  }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}

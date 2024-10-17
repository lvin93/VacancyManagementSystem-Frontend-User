import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataserviceService {
  constructor(private http: HttpClient) { }

  private vacancyId: number | null = null;
  private candidateId: number | null = null;
setVacancyId(id: number): void {
  this.vacancyId = id;
}

setCandidateId(id: number): void {
  this.candidateId = id;
}

getVacancyId(): number | null {
  return this.vacancyId;
}

getCandidateId(): number | null {
  return this.candidateId;
}

}

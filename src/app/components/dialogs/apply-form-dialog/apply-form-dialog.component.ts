import {ChangeDetectionStrategy, Component, Inject, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  MAT_DIALOG_DATA 
} from '@angular/material/dialog';
import { VacancyServiceService } from '../../../services/vacancy-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { CandidateServiceService } from '../../../services/candidate-service.service';
import { Router } from '@angular/router';
import { SharedDataserviceService } from '../../../services/shared-dataservice.service';



@Component({
  selector: 'app-apply-form-dialog',
  templateUrl: './apply-form-dialog.component.html',
  styleUrl: './apply-form-dialog.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ApplyFormDialogComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  fin: string = '';
  phone: string = '';
  resumeId: number = 0; 
  constructor(public dialogRef: MatDialogRef<ApplyFormDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: { vacancyId: number }, 
  private vacancyService:VacancyServiceService,private candidateService:CandidateServiceService,private router: Router,private sharedDataservice:SharedDataserviceService
  ) 
  {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(form :any): void {
    if (form.valid) {
      const postData = {
        name: this.name,
        surname: this.surname,
        email:this.email,
        fin:this.fin,
        phone:this.phone,
        resumeId:null,
        vacancyId: this.data.vacancyId
        //resumeId:this.resumeId
      };

      this.candidateService.postCandidate(postData).subscribe({
        next: (response: any) => { // response yapısına göre 'any' yerine uygun tip belirleyin

          this.sharedDataservice.setVacancyId(this.data.vacancyId);
          this.sharedDataservice.setCandidateId(response.id);
            this.router.navigate(['/quiz']);
        },
        error: (error) => {
        }
    });
    }
    this.dialogRef.close(this.data);
  }



}


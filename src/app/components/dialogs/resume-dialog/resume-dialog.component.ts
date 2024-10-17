import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CandidateServiceService } from '../../../services/candidate-service.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resume-dialog',
  templateUrl: './resume-dialog.component.html',
  styleUrl: './resume-dialog.component.scss',
  standalone:true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
})
export class ResumeDialogComponent {
  selectedFile: File | null = null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { candidateId: number; vacancyId: number },
  private candidateService:CandidateServiceService ,private router:Router ,
  private dialogRef: MatDialogRef<ResumeDialogComponent>, 
  private snackBar: MatSnackBar
) {}


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('resume', this.selectedFile);
      formData.append('candidateId', String(this.data.candidateId));
      formData.append('vacancyId', String(this.data.vacancyId));

      this.candidateService.postResume(formData).subscribe({
        next: (response: any) => {
          this.snackBar.open("Testdə iştirak etdiyiniz üçün təşəkkür edirik . Nəticələr yoxlanılacaq və uyğun olduğu halda sizinlə əlaqə saxlanılacaqdır", "", {
            duration: 10000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.router.navigate(['/']);
          this.dialogRef.close();
        },
        error: (err) => {
          alert('Xəta yarandı');
        }
      });
      
    }
  }


}

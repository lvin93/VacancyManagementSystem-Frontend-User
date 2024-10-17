import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { VacancyServiceService } from '../../../services/vacancy-service.service';
import { Vacancy } from '../../../models/Vacancy';
import { MatButtonModule } from '@angular/material/button';
import { ApplyFormDialogComponent } from '../../dialogs/apply-form-dialog/apply-form-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ApplyFormDialogComponent
  ],
})

export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description','startDate','endDate','statusName','vacancyGroupName','actions']; 
  dataSource: Vacancy[] = []; 

  constructor(private dataService: VacancyServiceService,public dialog: MatDialog)  { }


  applyDialog(vacancyId:number): void {
    const dialogRef = this.dialog.open(ApplyFormDialogComponent, {
      width: '400px',
      data: {vacancyId:vacancyId },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        console.log('data:',response.vacancies)
        this.dataSource = response.vacancies;
      },
      (error) => {
        console.error('Error!!!!:', error);
      }
    );
  }

  apply(vacancyId: any): void {
    console.log('Edit:', vacancyId);
  }
 
}

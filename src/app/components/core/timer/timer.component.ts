import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
  standalone:true,
  imports: [
    CommonModule,
  ],
})
export class TimerComponent {
  @Input() minutes :number =0;


  timeRemaining$ = timer(0, 1000).pipe(
    map(n => (this.minutes*60 - n) * 1000),
    takeWhile(n => n >= 0)
  );
}

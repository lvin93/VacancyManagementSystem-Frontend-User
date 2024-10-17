import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.scss',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule],
})
export class FooterComponent {

}

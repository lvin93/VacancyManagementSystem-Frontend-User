import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule],
})
export class HeaderComponent {

}

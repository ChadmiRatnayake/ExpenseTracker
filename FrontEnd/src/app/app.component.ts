import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListExpenseComponent } from './components/list-expense/list-expense.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  RouterOutlet, ListExpenseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FrontEnd';
}

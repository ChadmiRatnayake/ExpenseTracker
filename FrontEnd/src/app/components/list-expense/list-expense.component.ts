import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense';

@Component({
  selector: 'app-list-expense',
  standalone: true,
  imports: [],
  templateUrl: './list-expense.component.html',
  styleUrl: './list-expense.component.css'
})
export class ListExpenseComponent implements OnInit {

  expenses: Expense[] = [];

  constructor(private _expenseService: ExpenseService) { }

  ngOnInit(): void {
      this._expenseService.getExpenses().subscribe(
        data => this.expenses = data
      )
  }

}

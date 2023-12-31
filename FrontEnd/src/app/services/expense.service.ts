import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { Expense } from '../models/expense';
import { response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private getUrl: string = "http://localhost:8080/api/v1/expenses";

  constructor(private _httpClient: HttpClient) { }

  getExpenses(): Observable<Expense[]>{
    return this._httpClient.get<Expense[]>(this.getUrl).pipe(
      map(response => response)
    )
  }
}

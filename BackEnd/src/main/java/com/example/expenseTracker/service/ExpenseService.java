package com.example.expenseTracker.service;

import com.example.expenseTracker.model.Expense;

import java.util.List;

public interface ExpenseService {

    List<Expense> findAll();

}

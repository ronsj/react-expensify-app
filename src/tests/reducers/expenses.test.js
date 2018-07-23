import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const index = 1;
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[index].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses.slice(0, index),
    ...expenses.slice(index + 1)
  ]);
});

test('should not remove expenses if id not found', () => {
  const index = 1;
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense
test('should add an expense', () => {
  const expense = {
    id: '99',
    description: 'Groceries',
    note: '',
    amount: 50,
    createdAt: 20000,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// should edit an expense
test('should edit an expense', () => {
  const index = 1;
  const amount = 999999;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[index].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[index].amount).toBe(amount);
});

test('should not edit expense if expense not found', () => {
  const amount = 999999;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

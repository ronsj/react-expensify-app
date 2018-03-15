import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={({ target }) => {
        props.dispatch(setTextFilter(target.value))
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        switch (e.target.value) {
          case 'amount':
            props.dispatch(sortByAmount());
            return;
          case 'date':
            props.dispatch(sortByDate());
            return;
          default:
            props.dispatch(sortByDate());
            return;
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = ({ filters }) => ({ filters });

export default connect(mapStateToProps)(ExpenseListFilters);

import moment from 'moment';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate set text with text value', () => {
  const text = 'abc123';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sort by text to date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
  // expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate sort by text to amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
  // expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

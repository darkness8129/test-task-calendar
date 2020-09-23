import * as ActionTypes from './actionTypes';

export const switchMonthCreator = (switchedDate) => ({ type: ActionTypes.switchMonth, switchedDate: switchedDate });

export const selectDateActionCreator = (date) => ({ type: ActionTypes.selectDate, date: date });

export const setDaysOfMonthActionCreator = (daysOfMonth) => ({ type: ActionTypes.setDaysOfMonth, daysOfMonth: daysOfMonth })
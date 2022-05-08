import moment from 'moment';

export const MONTHS = () => {
  const result = {};
  const monthArr = moment.months().map((month, index) => {
    result[index + 1] = {
      month: index + 1,
      amount: '',
      year: new Date().getFullYear(),
    };
    return result;
  });
  return monthArr;
};

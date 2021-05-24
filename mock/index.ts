import mockjs from 'mockjs';

export default {
  // use mockjs
  'GET /api/dailyExpenses': mockjs.mock({
    msg: 'success',
    'content|1-30': [
      { date: '@datetime(`MM-dd`)', expenses: '@natural(0, 100)' },
    ],
  }),
};

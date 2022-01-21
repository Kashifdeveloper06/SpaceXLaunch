import * as Util from '../index';
export const postRequest = (
  endpoint,
  params,
  successcallback,
  errorcallback,
) => {
  return fetch(`${Util.BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: Util.Interceptor.getHeaders(),
    body: JSON.stringify({query:params}),
  })
    .then(response => {
      successcallback(response);
    })
    .catch(err => {
      console.log('showing error in api', err);
      errorcallback(err);
    });
};

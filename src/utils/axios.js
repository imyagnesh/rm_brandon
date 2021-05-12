import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://calm-oasis-43947.herokuapp.com',
  // timeout: 10000,
  // timeoutErrorMessage: 'due to heavy traffic.Please Try after sometime',
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.common['Authorization'] = token;
    // }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // if (response.data.status && response.data.status === 'done') {
    //   return {
    //     ...response,
    //     data: response.data.data,
    //   };
    // }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error?.response?.data?.message[0]?.messages[0].message) {
      return Promise.reject(
        new Error(error?.response?.data?.message[0]?.messages[0].message),
      );
    }
    return Promise.reject(error);
  },
);

export default instance;

// const data =  {"config": {"adapter": [Function xhrAdapter], "baseURL": "https://calm-oasis-43947.herokuapp.com", "data": "{\"identifier\":\"yagnesh\",\"password\":\"modh\"}", "headers": {"Accept": "application/json, text/plain, */*", "Content-Type": "application/json;charset=utf-8"}, "maxBodyLength": -1, "maxContentLength": -1, "method": "post", "timeout": 0, "transformRequest": [[Function transformRequest]], "transformResponse": [[Function transformResponse]], "url": "auth/local", "validateStatus": [Function validateStatus], "xsrfCookieName": "XSRF-TOKEN", "xsrfHeaderName": "X-XSRF-TOKEN"}, "data": {"data": [[Object]], "error": "Bad Request", "message": [[Object]], "statusCode": 400}, "headers": {"connection": "keep-alive", "content-length": "245", "content-type": "application/json; charset=utf-8", "date": "Wed, 12 May 2021 01:19:52 GMT", "server": "Cowboy", "strict-transport-security": "max-age=31536000; includeSubDomains", "vary": "Origin", "via": "1.1 vegur", "x-frame-options": "SAMEORIGIN", "x-powered-by": "Strapi <strapi.io>", "x-ratelimit-limit": "10", "x-ratelimit-remaining": "9", "x-ratelimit-reset": "1620782453", "x-response-time": "20ms"}, "request": {"DONE": 4, "HEADERS_RECEIVED": 2, "LOADING": 3, "OPENED": 1, "UNSENT": 0, "_aborted": false, "_cachedResponse": undefined, "_hasError": false, "_headers": {"accept": "application/json, text/plain, */*", "content-type": "application/json;charset=utf-8"}, "_incrementalEvents": false, "_lowerCaseResponseHeaders": {"connection": "keep-alive", "content-length": "245", "content-type": "application/json; charset=utf-8", "date": "Wed, 12 May 2021 01:19:52 GMT", "server": "Cowboy", "strict-transport-security": "max-age=31536000; includeSubDomains", "vary": "Origin", "via": "1.1 vegur", "x-frame-options": "SAMEORIGIN", "x-powered-by": "Strapi <strapi.io>", "x-ratelimit-limit": "10", "x-ratelimit-remaining": "9", "x-ratelimit-reset": "1620782453", "x-response-time": "20ms"}, "_method": "POST", "_perfKey": "network_XMLHttpRequest_https://calm-oasis-43947.herokuapp.com/auth/local", "_performanceLogger": {"_closed": false, "_extras": [Object], "_pointExtras": [Object], "_points": [Object], "_timespans": [Object]}, "_requestId": null, "_response": "{\"statusCode\":400,\"error\":\"Bad Request\",\"message\":[{\"messages\":[{\"id\":\"Auth.form.error.invalid\",\"message\":\"Identifier or password invalid.\"}]}],\"data\":[{\"messages\":[{\"id\":\"Auth.form.error.invalid\",\"message\":\"Identifier or password invalid.\"}]}]}", "_responseType": "", "_sent": true, "_subscriptions": [], "_timedOut": false, "_trackingName": "unknown", "_url": "https://calm-oasis-43947.herokuapp.com/auth/local", "readyState": 4, "responseHeaders": {"Connection": "keep-alive", "Content-Length": "245", "Content-Type": "application/json; charset=utf-8", "Date": "Wed, 12 May 2021 01:19:52 GMT", "Server": "Cowboy", "Strict-Transport-Security": "max-age=31536000; includeSubDomains", "Vary": "Origin", "Via": "1.1 vegur", "X-Frame-Options": "SAMEORIGIN", "X-Powered-By": "Strapi <strapi.io>", "X-Ratelimit-Limit": "10", "X-Ratelimit-Remaining": "9", "X-Ratelimit-Reset": "1620782453", "X-Response-Time": "20ms"}, "responseURL": "https://calm-oasis-43947.herokuapp.com/auth/local", "status": 400, "timeout": 0, "upload": {}, "withCredentials": true}, "status": 400, "statusText": undefined}

'use strict'

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
  
// const createRequest = (options = {}) => {
const createRequest = (options) => {  

  let data = '';  
    
  const xhr = new XMLHttpRequest();
    
    try {
      xhr.open(options.method, options.URL);
      xhr.withCredentials = true;
      xhr.responseType = 'json';
      if (options.method !== 'GET') {
        // data = options.data;
        // let formData = new FormData(options.data);
        let formData = new FormData();
        formData.append('email', `${options.data.email}`);
        formData.append('password', `${options.data.password}`);
        formData.append('name', `${options.data.name}`);
        data = formData;
      }

      xhr.send(data);            

      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          if (xhr.response && xhr.response.success) {
            options.callback(xhr.response);
          }
        }
      })
      
    } catch(err) {
      // перехват сетевой ошибки
      alert(err);
    }
    
    return xhr;
};
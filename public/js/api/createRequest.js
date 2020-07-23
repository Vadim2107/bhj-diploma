'use strict'

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
  
const createRequest = (options = {}, callback = f => f) => { 

  if (!options.data && !(options.URL == '/user/logout')) return;

  let URL = options.URL;
  let data = '';  

  const encodeURL = (data) => {
    if ( data ) {
      return '?' + Object.entries( data ).map(([ key, value ]) => `${ key }=${ value }` ).join( '&' );
    } 
  }

  if ( options.id ) URL += `/${ options.id }`;
  if ( options.method == 'GET' && options.data ) URL += encodeURL( options.data );
  else data = options.data;

  const xhr = new XMLHttpRequest();
  xhr.open( options.method, URL );
  xhr.responseType = 'json';
  xhr.withCredentials = true;
  try {            
    xhr.send( data );
    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE && this.status === 200) {
          if (this.response && this.response.success) callback( xhr.response );
          else if (this.response && this.response.error) alert( this.response.error );
      }
    })        
  } catch ( error ) {
    alert( error );
  }  
    
  return xhr;
}

// function encodeURL (data) {
//   if ( data ) {
//     return '?' + Object.entries( data ).map(([ key, value ]) => `${ key }=${ value }` ).join( '&' );
//   }
// }

'use strict'

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
  
// const createRequest = (options = {}, callback) => { 
const createRequest = (options = {}, callback = f => f) => { 

  if (!options.data && !(options.URL == '/user/logout')) return;

  let URL = options.URL;
  let data = '';  

  // const encodeURL = (data) => {
  //   if ( data ) {
  //     return '?' + Object.entries( data ).map(([ key, value ]) => `${ key }=${ value }` ).join( '&' );
  //   } 
  // }

  if ( options.id ) URL += `/${ options.id }`
  if ( options.method == 'GET' && options.data ) URL += encodeURL( options.data );
  else data = options.data;

  const xhr = new XMLHttpRequest();
  xhr.open( options.method, URL );
  xhr.responseType = 'json';
  xhr.withCredentials = true;
  // try {
    console.log( data );        
    xhr.send( data );
    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE && this.status === 200) {
          if (this.response && this.response.success) callback( xhr.response );
          else if (this.response && this.response.error) callback( this.response.error );
      }
    })        
  // } catch ( error ) {
  //   alert( error );
  // }  
    
  return xhr;
}

function encodeURL (data) {
  if ( data ) {
    return '?' + Object.entries( data ).map(([ key, value ]) => `${ key }=${ value }` ).join( '&' );
  }
}

// function createRequest ( options = {}, callback ) {
    
//   if ( !options.body && !( options.URL == '/user/logout' )) return;

//   let URL = options.URL;

//   if ( options.method == 'GET' && options.body ) {
//       URL += encodeURL( options.body );
//       delete options.body;
//       delete options.URL;
//   }

//   fetch( URL, options )
//   .then( response => response.json() )
//   .then( data => callback( data ))
//   .catch( error => console.log( error ));
// }

// function encodeURL ( data ) {
//   return '?' + Object.entries( data )
//   .map(([ key, value ]) => `${ key }=${ value }` )
//   .join( '&' );
// }
'use strict'

/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */

class Entity {
  static URL = '';

  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
  static list( data, callback = f => f ) {
    // return createRequest({method: 'GET', URL: this.URL, data: data, callback: callback});
    // для объекта, если свойство совпадает со значением, то запись можно сократить:
    // {a: a, b: b} => {a, b}
    return createRequest({method: 'GET', URL: this.URL, data}, callback);
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create( data, callback = f => f ) {
    data.append( '_method', 'PUT' );
    // let modifiedData = Object.assign({ _method: 'PUT' }, data );    
    return createRequest({method: 'POST', URL: this.URL, data}, callback);
  }

  /**
   * Получает информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static get( id = '', data, callback = f => f ) {
    return createRequest({method: 'GET', URL: this.URL, id, data}, callback);
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove( id = '', data, callback = f => f ) {
    data.append( '_method', 'DELETE' );
    // data.append( id );    
    // let modifiedData = Object.assign({ _method: 'DELETE' }, data );    
    return createRequest({method: 'POST', URL: this.URL, id, data}, callback)
  }
};

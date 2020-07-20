'use strict'

/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  static URL = '/user';
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {    
    window.localStorage.user = JSON.stringify(user);    
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {    
    // delete window.localStorage.user;
    window.localStorage.removeItem('user');
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {    
    // if (window.localStorage.user) {
      return window.localStorage.user && JSON.parse( window.localStorage.user );      
    // }
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch(data, callback = f => f ) {    
    return createRequest({method: 'GET', URL: this.URL + '/current', data: data}, response => {
        if (response.success) {
          this.setCurrent(response.user);
        } else {
          this.unsetCurrent();         
        }     
        callback( response );
    });
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login( data, callback = f => f ) {
    return createRequest({ method: 'POST', URL: this.URL + '/login', data: data}, response => {
      if (response.success) {
        this.setCurrent( response.user );
      } 
      callback( response );
    });
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  
  static register( data, callback = f => f ) {
    return createRequest({ method: 'POST', URL: this.URL + '/register', data: data}, response => {
      if (response.success) {
        this.setCurrent( response.user );
      } 
      callback( response );
    });
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout( data, callback = f => f ) {
    return createRequest({ method: 'POST', URL: this.URL + '/logout', data: data}, () => {
      // if (response.success) {
        this.unsetCurrent();
      // }
      // App.setState( 'init' );     
      callback();
    });

  }
}

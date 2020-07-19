'use strict'

/**
 * Класс LoginForm управляет формой
 * входа в портал
 * Наследуется от AsyncForm
 * */
class LoginForm extends AsyncForm {

  constructor( element ) {
    super ( element );
  }
  
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit( options ) {    
    User.login( options, () => {
      App.getForm( 'login' ).element.reset();
      App.getModal( 'login' ).close();
      App.setState( 'user-logged' );
    });
  }
}

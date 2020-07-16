'use strict'

/**
 * Класс RegisterForm управляет формой
 * регистрации
 * Наследуется от AsyncForm
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit( options ) {
    User.register( options );
    App.getModal( 'register' ).close();
    App.setState( 'user-logged' );
    // User.register( options, () => {
    //   App.getForm( 'register' ).element.reset();
    //   App.getModal( 'register' ).close();
    //   App.setState( 'user-logged' );
    // });
  }
}

'use strict'

/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * Наследуется от AsyncForm
 * */
class CreateAccountForm extends AsyncForm {

  constructor( element ) {
    super ( element );
  }
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно (в котором находится форма) в случае успеха,
   * а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit( options ) {
    Account.create( options, () => {
      this.element.reset();
      App.getModal( 'createAccount' ).close();
      App.update();
    });
  }
}

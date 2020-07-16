'use strict'

/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    this.element = element;
    // AccountsWidget.registerEvents();

    if (!element) throw new Error('Element not found');
    this.registerEvents();

  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    // let disMiss = document.querySelectorAll('button[data-dismiss="modal"]');
    // let arrDisMiss = Array.from(disMiss);
    // arrDisMiss.map( element => element.onclick = this.onClose.bind( this ));
    this.dismiss = [...this.element.querySelectorAll( 'button[data-dismiss="modal"]' )];
    this.dismiss.map( element => element.onclick = this.onClose.bind(this));

  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose( e ) {
    this.close();
  }
  /**
   * Удаляет обработчики событий
   * */
  unregisterEvents() {
    this.dismiss.map( element => element.onclick = '' );
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style.display = 'block';

  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.element.style.display = 'none';

  }
}

'use strict';

export default class PopUp {
  constructor() {
    this.popUp = document.querySelector('.pop_up');
    this.popUpText = document.querySelector('.pop_up__message');
    this.popUpRefresh = document.querySelector('.pop_up__refresh');
    this.popUpRefresh.addEventListener('click', ()=> {
      this.onClick && this.onClick();
      this.hide()
    }) 
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  hide() {
    this.popUp.classList.add('pop_up--hide')
  }

  showWithText(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove('pop_up--hide')
  }
}
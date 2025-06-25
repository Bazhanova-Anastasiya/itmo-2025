export class Controller {
  constructor(model, view, btnUpId, btnDownId) {
    this.model = model;
    this.view = view;

    this.btnUp = document.getElementById(btnUpId);
    this.btnDown = document.getElementById(btnDownId);

    this.btnUp.addEventListener('click', () => this.clickHandleIncrement());
    this.btnDown.addEventListener('click', () => this.clickHandleDecrement());

    this.view.render(this.model.getValue());
  }

  clickHandleIncrement() {
    if (!this.model.increment()) {
      this.view.alertAndReload('Достигнуто максимальное значение счетчика!');
    } else {
      this.view.render(this.model.getValue());
    }
  }

  clickHandleDecrement() {
    if (!this.model.decrement()) {
      this.view.alertAndReload('Достигнуто минимальное значение счетчика!');
    } else {
      this.view.render(this.model.getValue());
    }
  }
}

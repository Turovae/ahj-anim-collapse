/* eslint-disable no-param-reassign */
import './CollapseWidget.css';

export default class CollapseWidget {
  constructor() {
    this.controls = [];

    this.click = this.click.bind(this);
  }

  init() {
    this.getControls();
    this.appendHandlers();
  }

  getControls() {
    this.controls = document.querySelectorAll('[data-toggle="collapse"]');
  }

  appendHandlers() {
    [...this.controls].forEach((controlEl) => {
      this.appendHandler(controlEl);
    });
  }

  appendHandler(elem) {
    elem.addEventListener('click', this.click);
  }

  click(event) {
    event.preventDefault();

    const targetId = event.currentTarget.dataset.target;
    const targetEl = document.querySelector(targetId);
    this.toggleCollapse(targetEl);
  }

  // eslint-disable-next-line class-methods-use-this
  toggleCollapse(target) {
    const maxHeight = target.scrollHeight;
    if (!target.style.maxHeight) {
      target.style.maxHeight = `${maxHeight}px`;
    } else {
      target.style.maxHeight = '';
    }
    target.classList.toggle('show');
  }
}

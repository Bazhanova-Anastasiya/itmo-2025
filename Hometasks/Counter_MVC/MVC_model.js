export class Model {
  constructor() {
    this.value = 0;
    this.min = 0;
    this.max = 20;
  }

  increment() {
    if (this.value < this.max) {
      this.value++;
      return true;
    }
    return false;
  }

  decrement() {
    if (this.value > this.min) {
      this.value--;
      return true;
    }
    return false;
  }

  getValue() {
    return this.value;
  }
}

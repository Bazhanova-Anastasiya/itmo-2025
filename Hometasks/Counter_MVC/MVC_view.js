export class View {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(value) {
    this.container.textContent = `Счетчик: ${value}`;
  }

  alertAndReload(message) {
    alert(message);
    location.reload();
  }
}

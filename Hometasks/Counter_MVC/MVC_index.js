// Инициализация
import {Model} from "./MVC_model.js"
import {View} from "./MVC_view.js"
import {Controller} from "./MVC_controller.js"

const app = new Controller(
  new Model(),
  new View('counter-container'),
  'buttonUp',
  'buttonDown'
);
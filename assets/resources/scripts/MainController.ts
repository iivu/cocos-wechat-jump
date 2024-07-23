import { _decorator, Component, Node } from 'cc';
import { LogicController } from './LogicController';
const { ccclass, property } = _decorator;

@ccclass('MainController')
export class MainController extends Component {
  @property({ type: Node })
  homePage: Node;
  @property({ type: LogicController })
  logicController: LogicController;

  start() {
    this.homePage.active = true;
  }

  update(deltaTime: number) {}

  startGame() {
    this.homePage.active = false;
    this.logicController.starGame();
  }
}

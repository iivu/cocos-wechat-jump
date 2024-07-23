import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainController')
export class MainController extends Component {
  @property({ type: Node })
  private homePage: Node;

  start() {
    this.homePage.active = true;
  }

  update(deltaTime: number) {}

  startGame() {
    this.homePage.active = false;
  }
}

import { _decorator, Component, instantiate, Node, Prefab, Vec3 } from 'cc';
import { BoxController } from './BoxController';
const { ccclass, property } = _decorator;

@ccclass('LogicController')
export class LogicController extends Component {
  @property({ type: Prefab })
  private boxPrefab: Prefab;
  @property({ type: Prefab })
  private playerPrefab: Prefab;

  start() {}

  update(deltaTime: number) {}

  private createBox(position: Vec3): Node {
    const box = instantiate(this.boxPrefab);
    const controller = box.getComponent(BoxController);
    controller.randomBox(this.node, position);
    return box;
  }

  starGame() {
    this.createBox(new Vec3(-108, -299));
    this.createBox(new Vec3(196, -116));
  }
}

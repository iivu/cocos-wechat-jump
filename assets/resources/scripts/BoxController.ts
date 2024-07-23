import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BoxController')
export class BoxController extends Component {

    private currBox: Node;

    randomBox(parent:Node, position: Vec3) {
        const index = Math.floor(Math.random() * (this.node.children.length - 1));
        this.currBox = this.node.children[index];
        this.currBox.active = true;
        this.node.setParent(parent);
        this.node.setPosition(position);
    }
}

/**
 * 拖动源连接器 连接一个真实DOM 另一头是ReactDND系统
 */
class SourceConnector {
  backend;
  handlerId;
  dragSourceRef;
  constructor(backend) {
    this.backend = backend;
  }
  receiverHandlerId(handlerId) {
    this.handlerId = handlerId;
    this.connect();
  }
  /**
   * 连接ReactDnd系统和DOM对象
   */
  connect() {
    if (!this.handlerId || !this.dragSourceRef) return;
    this.backend.connectDragSource(this.handlerId, this.dragSourceRef.current);
  }
  // 接收真实DOM
  receiveDragSource = () => {
    return (dragSourceRef) => this.dragSourceRef = dragSourceRef;
  }
}

export default SourceConnector;

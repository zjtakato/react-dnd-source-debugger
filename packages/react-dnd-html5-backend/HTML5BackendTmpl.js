/**
 * 负责绑定DOM事件,修改状态
 */
class HTML5BackendTmpl {
  manager;
  actions;
  dragStartHandlerId; // 记录当前被拖动的处理器ID
  dragOverTargetId;
  constructor(manager) {
    this.actions = manager.getActions();
  }

  /**
   *
   * @param {*} handlerId
   * @param {HTMLElement} domNode
   */
  connectDragSource = (handlerId, domNode) => {
    domNode.setAttribute('draggable', true);
    domNode.addEventListener('dragstart', (event) => {
      this.handleDragStart(event, handlerId);
    });
  };
  handleDragStart(event, handlerId) {
    this.dragStartHandlerId = handlerId;
  }
  setup = () => {
    this.addEventListener(window);
  };
  addEventListener = (target) => {
    target.addEventListener('dragstart', this.handleTopDragStart);
    target.addEventListener('dragover', this.handleTopDragOver);
    target.addEventListener('dragend', this.handleTopDragEndCapture, true);
  };
  handleTopDragStart = () => {
    this.actions.beginDrag(this.dragStartHandlerId);
  };
  handleTopDragEndCapture = () => {
    this.actions.endDrag();
  };
  /**
   *
   * @param {*} targetId
   * @param {HTMLElement} domNode
   */
  connectDropTarget(targetId, domNode) {
    domNode.addEventListener('dragover', (event) => {
      this.handleDragOver(event, targetId);
    });
  }
  handleDragOver = (event, targetId) => {
    this.dragOverTargetId = targetId;
  };
  handleTopDragOver = (event) => {
    this.actions.hover(this.dragOverTargetId, {
      clientOffset: getEventClientOffset(event),
    });
  };
}

export default HTML5BackendTmpl;

function getEventClientOffset(event) {
  let offset = {
    x: event.clientX,
    y: event.clientY,
  };
  return offset;
}

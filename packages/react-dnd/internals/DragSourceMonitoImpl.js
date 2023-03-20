class DragSourceMonitoImpl {
  internalMonitor;
  handlerId;
  constructor(manager) {
    this.internalMonitor = manager.getGlobalMonitor();
  }
  receiveHandlerId(handlerId) {
    this.handlerId = handlerId;
  }
  subscribeStateChange(listener) {
    return this.internalMonitor.subscribeStateChange(listener);
  }
  isDragging() {
    return this.internalMonitor.isDraggingSource(this.handlerId);
  }
}

export default DragSourceMonitoImpl;

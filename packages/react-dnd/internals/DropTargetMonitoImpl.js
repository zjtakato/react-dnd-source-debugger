class DropTargetMonitoImpl {
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
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
}

export default DropTargetMonitoImpl;

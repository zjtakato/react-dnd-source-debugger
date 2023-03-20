class DragDropMonitorImpl {
  store;
  registry;
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }
  subscribeStateChange(listener) {
    // 最终listener传递给了redux仓库
    this.store.subscribe(listener);
  }
  isDraggingSource(handlerId) {
    return handlerId === this.getSourceId();
  }
  getSourceId() {
    // 取当前正在被拖动的元素的handlerId
    return this.store.getState().dragOperation.sourceId;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
}

export default DragDropMonitorImpl;

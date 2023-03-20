import { legacy_createStore as createStore } from 'redux';
import reducer from './reducers';
import DragDropManagerImpl from './classes/DragDropManagerImpl';
import DragDropMonitorImpl from './classes/DragDropMonitorImpl';
import HandlerRegisteryImpl from './classes/HandlerRegisteryImpl';

function createDragDropManager(backendFactory) {
  // 管理dnd项目的状态
  const store = createStore(reducer);
  const registry = new HandlerRegisteryImpl(store);
  const globalMonitor = new DragDropMonitorImpl(store, registry);
  const manager = new DragDropManagerImpl(store, globalMonitor);
  const backend = backendFactory(manager);
  manager.receiveBackend(backend);
  return manager;
}

export default createDragDropManager;

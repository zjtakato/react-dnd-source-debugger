import { HandlerRole } from '../interfaces';
import { getNextUniqueId } from '../utils';
import { addSource, addTarget } from '../actions/registry';

class HandlerRegisteryImpl {
  store;
  types = new Map(); // [handlerId: types]
  dragSources = new Map(); // [handlerId: dragSource instance]
  dropTargets = new Map();
  constructor(store) {
    this.store = store;
  }
  addSource(type, dragSource) {
    const handlerId = this.addHandler(HandlerRole.SOURCE, type, dragSource);
    this.store.dispatch(addSource(handlerId));
    return handlerId;
  }
  addHandler(role, type, handler) {
    const handlerId = getNextHandler(role);
    this.types.set(handlerId, type);
    if (role === HandlerRole.SOURCE) {
      this.dragSources.set(handlerId, handler);
    } else if (role === HandlerRole.TARGET) {
      this.dropTargets.set(handlerId, handler);
    }
    return handlerId;
  }
  getSource(sourceId) {
    return this.dragSources.get(sourceId);
  }
  getSourceType(sourceId) {
    return this.types.get(sourceId);
  }
  addTarget(type, dragSource) {
    const handlerId = this.addHandler(HandlerRole.TARGET, type, dragSource);
    this.store.dispatch(addTarget(handlerId));
    return handlerId;
  }
  getTarget(targetId) {
    return this.dropTargets.get(targetId);
  }
  getTargetType(sourceId) {
    return this.types.get(sourceId);
  }
}

function getNextHandler(role) {
  const id = getNextUniqueId();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`未知角色,${role}`);
  }
}

export default HandlerRegisteryImpl;

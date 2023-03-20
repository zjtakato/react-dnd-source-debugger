import { useLayoutEffect } from 'react';
import useDragDropManager from '../useDragDropManager';
import useDropTarget from './useDropTarget';
import { registerTarget } from '../../internals';

/**
 * 注册拖动源 创建一个拖动源，并且注册它到注册表，并返回handleId
 * @param {*} spec
 * @param {*} monitor
 * @param {*} connector
 */
function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dropTarget = useDropTarget(spec, monitor, connector); // 拖动源实例
  const itemType = spec.type; // 拖动源类型
  useLayoutEffect(() => {
    // 使用useLayoutEffect的原因是这个时候才有真实DOM，才可以进行绑定
    const handlerId = registerTarget(itemType, dropTarget, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiverHandlerId(handlerId);
  }, [connector, dropTarget, itemType, manager, monitor]);
}

export default useRegisteredDragSource;

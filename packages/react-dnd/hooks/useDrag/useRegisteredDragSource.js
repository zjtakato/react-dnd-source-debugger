import { useLayoutEffect } from 'react';
import useDragDropManager from '../useDragDropManager';
import useDragSource from './useDragSource';
import useDragType from './useDragType';
import { registerSource } from '../../internals';

/**
 * 注册拖动源 创建一个拖动源，并且注册它到注册表，并返回handleId
 * @param {*} spec
 * @param {*} monitor
 * @param {*} connector
 */
function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dragSource = useDragSource(spec, monitor, connector); // 拖动源实例
  const itemType = useDragType(spec); // 拖动源类型
  useLayoutEffect(() => {
    // 使用useLayoutEffect的原因是这个时候才有真实DOM，才可以进行绑定
    const handlerId = registerSource(itemType, dragSource, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiverHandlerId(handlerId);
  }, [connector, dragSource, itemType, manager, monitor]);
}

export default useRegisteredDragSource;

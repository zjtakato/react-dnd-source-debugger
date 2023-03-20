import useDragSourceMonitor from './useDragSourceMonitor';
import useDragSourceConnector from './useDragSourceConnector';
import useRegisteredDragSource from './useRegisteredDragSource';
import useConnectDragSource from './useConnectDragSource';
import useCollectedProps from '../useCollectedProps';

/**
 *
 * @param {*} spec 拖动源的规范对象
 */
function useDrag(spec) {
  // 创建监听器
  const monitor = useDragSourceMonitor();
  // 创建连接器
  const connector = useDragSourceConnector();
  // 向DND系统注册拖动源实例 1. 创建拖动源实例 2. 注册拖动源实例到注册表
  useRegisteredDragSource(spec, monitor, connector);
  return [useCollectedProps(spec.collect, monitor, connector), useConnectDragSource(connector)];
}

export default useDrag;

import useDropTargetMonitor from './useDropTargetMonitor';
import useDropTargetConnector from './useDropTargetConnector';
import useRegisteredDropTarget from './useRegisteredDropTarget';
import useConnectDropTarget from './useConnectDropTarget';
import useCollectedProps from '../useCollectedProps';

/**
 *
 * @param {*} spec 拖动源的规范对象
 */
function useDrop(spec) {
  // 创建监听器
  const monitor = useDropTargetMonitor();
  // 创建连接器
  const connector = useDropTargetConnector();
  // 向DND系统注册拖动源实例 1. 创建拖动源实例 2. 注册拖动源实例到注册表
  useRegisteredDropTarget(spec, monitor, connector);
  return [useCollectedProps(spec.collect, monitor, connector), useConnectDropTarget(connector)];
}

export default useDrop;

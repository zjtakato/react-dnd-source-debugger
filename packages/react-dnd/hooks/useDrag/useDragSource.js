import DragSourceImpl from './DragSourceImpl';
import { useMemo, useEffect } from 'react';

/**
 * 创建一个拖动源的实例
 * @param {*} spec
 * @param {*} monitor
 * @param {*} connector
 */
function useDragSource(spec, monitor, connector) {
  const dragSource = useMemo(() => new DragSourceImpl(spec, monitor, connector), [monitor, connector]);
  useEffect(() => {
    dragSource.spec = spec;
  }, [spec]);
  return dragSource;
}

export default useDragSource;

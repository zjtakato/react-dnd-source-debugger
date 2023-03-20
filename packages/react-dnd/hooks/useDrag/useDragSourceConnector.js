import { useMemo } from 'react';
import useDragDropManager from '../useDragDropManager';
import { SourceConnector } from '../../internals';

function useDragSourceConnector() {
  // 先获取管理器manager
  const manager = useDragDropManager();
  // 创建一个拖动源的连接器
  const connector = useMemo(() => new SourceConnector(manager.getBackend()), [manager]);

  return connector;
}

export default useDragSourceConnector;

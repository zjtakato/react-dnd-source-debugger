import { useMemo } from 'react';
import useDragDropManager from '../useDragDropManager';
import { DragSourceMonitoImpl } from '../../internals';

function useDragSourceMonitor() {
  const manager = useDragDropManager();
  return useMemo(() => new DragSourceMonitoImpl(manager), [manager]);
}

export default useDragSourceMonitor;

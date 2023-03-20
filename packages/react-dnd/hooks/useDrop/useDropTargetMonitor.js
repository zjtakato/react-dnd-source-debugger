import { useMemo } from 'react';
import useDragDropManager from '../useDragDropManager';
import { DropTargetMonitoImpl } from '../../internals';

function useDropTargetMonitor() {
  const manager = useDragDropManager();
  return useMemo(() => new DropTargetMonitoImpl(manager), [manager]);
}

export default useDropTargetMonitor;

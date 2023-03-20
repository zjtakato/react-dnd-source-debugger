export const ADD_SOURCE = 'dnd-core/ADD_SOURCE';
export const ADD_TARGET = 'dnd-core/ADD_TARGET';


export function addSource(handleId) {
  return {
    type: ADD_SOURCE,
    payload: { handleId },
  };
}


export function addTarget(handleId) {
  return {
    type: ADD_TARGET,
    payload: { handleId },
  };
}

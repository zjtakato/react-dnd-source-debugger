import { BEGIN_DRAG, END_DRAG, HOVER } from '../actions/dragDrop';
const initalState = {
  clientOffset: null,
};

function reducer(state = initalState, action) {
  const { payload } = action;
  switch (action.type) {
    case BEGIN_DRAG:
      return { clientOffset: payload.clientOffset };
    case END_DRAG: {
      return initalState;
    }
    case HOVER:
      return { clientOffset: payload.clientOffset };
    default:
      return state;
  }
}

export default reducer;

// @flow
// import type { counterStateType } from '../reducers/counter';

type actionType = {
  +type: string
};

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function increment() {
  return {
    type: ADD_ITEM
  };
}

export function decrement() {
  return {
    type: REMOVE_ITEM
  };
}

export function incrementIfOdd() {
  return (dispatch: (action: actionType) => void, getState: () => counterStateType) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

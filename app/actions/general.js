// @flow
export const LOADING = 'LOADING';
export function loading(value) {
  return {
    type: LOADING,
    loading: value
  };
}

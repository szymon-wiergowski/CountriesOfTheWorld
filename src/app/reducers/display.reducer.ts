import { Action, createReducer, on } from '@ngrx/store';
import { hideBackButton, showBackButton } from '../actions/display.actions';

export const initialState = false;

const _displayReducer = createReducer(
  initialState,
  on(hideBackButton, () => false),
  on(showBackButton, () => true),
);

export function displayReducer(state = initialState, action: Action) {
  return _displayReducer(state, action);
}

import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import { middlewares } from '../store';

export const findByTestAttribute = (component, attribute) => {
  return component.find(`[data-test='${attribute}']`);
}

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
}

export const testStore = initialState => {
  const cretaStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return cretaStoreWithMiddleware(rootReducer, initialState);
}

import checkPropTypes from 'check-prop-types';

export const findByTestAttribute = (component, attribute) => {
  return component.find(`[data-test='${attribute}']`);
}

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
}

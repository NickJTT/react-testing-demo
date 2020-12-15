import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

export default function Button({ buttonText, emitEvent }) {
  return <button className = { style.button } data-test = { style.button } onClick = { emitEvent }>
    { buttonText }
  </button>;
}

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
}

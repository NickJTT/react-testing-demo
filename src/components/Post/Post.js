import React from 'react';
import PropTypes from 'prop-types';
import style from './Post.module.scss';

export default function Post({ title, description }) {
  return title ? <div className = { style.post } data-test = { style.post }>
    <h2>{ title }</h2>
    <p>{ description }</p>
  </div> : null;
}

Post.propTypes = { title: PropTypes.string, description: PropTypes.string };

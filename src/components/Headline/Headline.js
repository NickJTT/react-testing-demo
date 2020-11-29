import React, { Component } from 'react';
import style from './Headline.module.scss';
import PropTypes from 'prop-types';

export default class Headline extends Component {
  render() {
    const { header, description } = this.props;

    if (!header) return null;

    return <div className = { style.headline } data-test = { style.headline }>
      <h1>{ header }</h1>
      <p>{ description }</p>
    </div>;
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    onlineStatus: PropTypes.bool
  }))
};

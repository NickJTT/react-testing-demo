import React, { Component } from 'react';
import style from './Headline.module.scss';

export default class Headline extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const { header, description } = this.props;

    if (!header) return null;

    return <div className = { style.headline } data-test = { style.headline }>
      <h1>{ header }</h1>
      <p>{ description }</p>
    </div>;
  }
}

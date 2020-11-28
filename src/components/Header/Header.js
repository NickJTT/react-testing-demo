import React from 'react';
import style from './Header.module.scss';

export default function Header() {
  return <header className = { style.header } data-test = { style.header }>
    <h4>Logo</h4>
  </header>;
}

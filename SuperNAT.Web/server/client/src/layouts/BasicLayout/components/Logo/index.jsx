import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Logo() {
  return (
    <Link to="/" className={styles.logoStyle}>
      SuperNAT内网穿透
    </Link>
  );
}

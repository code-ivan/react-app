import React from 'react';
import styles from './Loading.scss';

function Loading() {
  return (
    <div className={styles.loading}>
      <i className="fa fa-spin fa-spinner" />
      <p>Loading</p>
    </div>
  );
}

Loading.displayName = 'Loading';

export default Loading;

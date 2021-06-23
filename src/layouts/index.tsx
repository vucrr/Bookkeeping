import React from 'react';
import styles from './index.css';
import router from 'umi/router'

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      {props.children}
      <div>
        <button
          onClick={() => {
            router.push('/a')
          }}
        >a</button>
        <button
          onClick={() => {
            router.push('/b')
          }}
        >b</button>
        <button
          onClick={() => {
            router.push('/c')
          }}
        >c</button>
      </div>
    </div>
  );
};

export default BasicLayout;

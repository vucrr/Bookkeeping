import React from 'react';
import styles from './index.css';
import router from 'umi/router'
import { Button } from 'antd-mobile';
// import 'antd-mobile/lib/button/style/css';

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
        <Button>qqq</Button>
      </div>
    </div>
  );
};

export default BasicLayout;

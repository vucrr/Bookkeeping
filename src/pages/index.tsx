import React from 'react';
import router from 'umi/router'
import styles from './index.css';
import FooterNav from './../components/footerNav/footerNav'

const App: React.FC = props => {
  return (
    <div className={styles.normal}>
      {props.children}
      <FooterNav />
    </div >
  );
}

export default App

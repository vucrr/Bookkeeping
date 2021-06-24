import React from 'react'
import LoadImg from './../../components/loadImg/loadImg'
import styles from './index.css'
import router from 'umi/router'

const FooterNav: React.FC = props => {
  return (
    <div
      className={styles.footerBox}
    >
      <div
        className={styles.item}
        onClick={() => {
          router.push('/home')
        }}
      >
        主页
      </div>
      <div
        className={styles.item}
        onClick={() => {
          router.push('/test')
        }}
      >
        test
      </div>
      <div
        className={styles.item}
        onClick={() => {
          router.push('/mine')
        }}
      >
        我的
      </div>
    </div>
  )
}

export default FooterNav
import React from 'react'
import styles from './index.css'
// import homePng from './../assets/home.png'

interface ImageAttr {
  url: string,
  alt: string
}

function LoadImg(props: ImageAttr) {
  // const { url, alt } = props
  return (
    <div>
      {/* <img src={`./../../assets/${url}`} alt={alt} /> */}
      {/* <img src={homePng} /> */}
    </div>
  )
}

export default LoadImg
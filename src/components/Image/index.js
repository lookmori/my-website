import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.css'
export default function Image({src,alt}) {
  return (
    <div className={clsx(`${styles.w_full} ${styles.h_full}`)}>
      <img src={src} alt={alt} width={100} height={60}/>
    </div>
  )
}

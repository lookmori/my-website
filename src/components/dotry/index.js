



import React from 'react'
import styles from './index.modules.css'
export default function Dotry() {
  const list = '古,今,多,少,事,都,付,笑,谈,中'.split(',')

  return (
    <div className={styles.container}>
      {
        list.map((item,index) => 
          <div className={styles.word}>
            {item}
          </div>
        )
      }

    </div>
  )
}

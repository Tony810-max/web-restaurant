import React from 'react'
import styles from './FoodCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function FoodCard({image,name}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
            <img src={image} className={styles.categoryImg}/>
            <span className={styles.nameFood}>{name}</span>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className={styles.iconCategory}/>
    </div>
  )
}

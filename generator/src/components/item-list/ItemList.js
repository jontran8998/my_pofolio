import React from 'react'
import styles from './ItemList.module.scss'


const ItemList = (props) => {
  console.log(props);
  return (
    <ul className={styles.listItems}>
      {
        props.children.map((bullet, bulletId) => {
          return <li key={bulletId}>{bullet}</li>
        })
      }
    </ul>
  )
}

export default ItemList
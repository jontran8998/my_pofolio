import React from 'react'
import style from './SectionFooter.module.scss'
const today = new Date()
const formatted_date = `${today.toDateString()} - ${today.toLocaleTimeString()}`
 
const SectionFooter = (props) => {
   return(
    <div className={style.footer}>
      <div className={style.left}>{props.children.left.replace("{time}", formatted_date) }</div>
      <div className={style.center}>{props.children.center.replace("{time}", formatted_date) }</div>
      <div className={style.right}>{props.children.right.replace("{time}", formatted_date) }</div>
    </div>
  )
}

export default SectionFooter
import React from 'react'
import styles from './SectionGrid.module.scss'
import Item from '../Item/Item'
import {sections} from '../../services/data'

const SectionGrid = (props) => {
  return(
    <div className={styles}>
      {sections.map(section => {
        return(
          <React.Fragment key={section.id}>
            <React.Fragment>
              {`${section.id}` === `${props.children.sectionId}` && <h3>{section.name}</h3>}
            </React.Fragment>
            <div style={
              {display: "grid",
              gridTemplateColumns: `${props.children.firstFraction}fr 1fr`
            }
            }>
              <div className="flexLayout">
                {`${section.id}` === `${props.children.sectionId}` && section.items.slice(0).reverse().map(item => {
                  return(
                    parseInt(item.id) > parseInt(props.children.breakId) ?
                    <React.Fragment key={`column1-${section.id}-${item.id}`}>
                      <Item hiddenKeys = {props.children.hiddenKeys}>{item}</Item>
                    </React.Fragment> :undefined) 
                })}
              </div>
              <div className="flexLayout">
                {`${section.id}` === `${props.children.sectionId}` && section.items.slice(0).reverse().map(item => {
                  return(
                    parseInt(item.id) <= parseInt(props.children.breakId) ?
                    <React.Fragment key={`column1-${section.id}-${item.id}`}>
                      <Item hiddenKeys = {props.children.hiddenKeys}>{item}</Item>
                    </React.Fragment> :undefined) 
                })}
              </div>
                
            </div>
            
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default SectionGrid
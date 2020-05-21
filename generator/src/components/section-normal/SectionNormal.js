import React from 'react'
import Item from '../Item/Item'
import { sections } from '../../services/data'

const SectionNormal = (props) => {
  return (
    <div >
      {sections.map((section) => {
        return (
          <React.Fragment key={`${section.id}`}>
            {`${section.id}` === `${props.children.sectionId}` && <h3>{section.name}</h3>}
            {`${section.id}` === `${props.children.sectionId}` && section.items.slice(0).reverse().map(item => {
              return (
                <Item hiddenKeys={props.children.hiddenKeys} key={`${section.id}-${item.id}`}>{item}</Item>
              )
            })}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default SectionNormal
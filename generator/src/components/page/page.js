import React from 'react'
import styles from './Page.module.scss'

import SectionInfo from "../../components/section-info/SectionInfo"
import SectionNormal from "../../components/section-normal/SectionNormal"
import SectionGrid from "../../components/section-grid/SectionGrid"
import SectionFooter from "../../components/section-footer/SectionFooter"
import * as Data from "../../services/data"



const Page = () => {
  return (
    <React.Fragment> {
      Data.layout.map((page, pageIndex) => {
        return (
          <div className={styles.page} key={`page-${pageIndex}`}>{
            page.map((item, itemId) => {
              let itemKey = `item-${pageIndex}-${itemId}`
              switch (item.type) {
                case 'Info':
                  return (
                    <div className={styles.section} key={itemKey}>
                      <SectionInfo/>
                    </div>)
                case 'NormalView':
                  return (
                    <div className={styles.section}  key={itemKey}>
                      <SectionNormal>{item}</SectionNormal>
                    </div>)

                case 'GridView':
                  return (
                    <div className={styles.section}  key={itemKey}>
                      <SectionGrid>{item}</SectionGrid>
                    </div>)
                case 'Footer':
                  return (
                    <div className={styles.footer}  key={itemKey}>
                      <SectionFooter>{item}</SectionFooter>
                    </div>)
                default:
                  throw new Error("Invalid component")
              }
            })
          }
          </div>
        )
      })
    }
    </React.Fragment>
  )
}

export default Page
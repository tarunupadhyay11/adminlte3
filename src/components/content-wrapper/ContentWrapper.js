import React from 'react'
import ContentHeader from '../content-header/ContentHeader'
import ContentSidebar from '../content-sidebar/ContentSidebar'
import ContentFooter from '../content-footer/ContentFooter'

const ContentWrapper = ({children}) => {
  return (
    <>
      <div className="hold-transition sidebar-mini layout-fixed">
          <div className="wrapper">
           <ContentHeader/>
           <ContentSidebar/>
           <div class="content-wrapper">
             {children}
            </div>
            <ContentFooter/>
          </div>
      </div>
    </>
  )
}


export default ContentWrapper

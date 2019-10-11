import React from 'react'
import { Collapse, Icon } from 'antd';

export default function SideNavList() {
     const { Panel } = Collapse;
     const text = (
          <span>
               <p style={{ paddingLeft: 24 }}>
                    Content Page 1.1.1.1
               </p>
               <p style={{ paddingLeft: 24 }}>
                    Content Page 1.1.1.1
               </p>
          </span>
        );
     
     const PanelStyle = {
          border: 0
     }
     const primaryIcons = () => (
          <Icon type="copy" />
     )
     const secondaryIcons = () => (
          <span>
               <Icon type="plus" />
               <Icon type="switcher" style={{ marginLeft: '17px' }}/>
               <Icon type="more" style={{ marginLeft: '17px' }}/>
          </span>
     )
     return (
          <div>
               <Collapse bordered={false} defaultActiveKey={['']} expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />} >
                    <Panel header="Collection 1" key="1" style={PanelStyle} extra={primaryIcons()}>
                         <Collapse defaultActiveKey="" bordered={false} expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
                              <Panel header="This is panel nest panel" key="1" style={PanelStyle} extra={secondaryIcons()}>
                                   <p>{text}</p>
                              </Panel>
                         </Collapse>
                    </Panel>
                    <Panel header="Collection 2" key="2" style={PanelStyle} extra={primaryIcons()}>
                         ...
                    </Panel>
               </Collapse>
          </div>
     )
}

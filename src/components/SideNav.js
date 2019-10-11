import React, { Component } from 'react'
import { Menu, Layout } from 'antd';
import Editor from './Editor';
import SideNavList from './SideNavList';

export class SideNav extends Component {
     state = {
          current: 'All'
     }
     render() {
          // console.log(this.state.current)
          const { Sider } = Layout;
          // const { TabPane } = Tabs;

          return (
               <div>
                    <Layout style={{ backgroundColor: 'white' }}>
                         <Sider style={{ backgroundColor: '#fbfefd', marginTop: '17px' }} width="350">
                              <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={ (e) => {
                                   // console.log('click');
                                   this.setState({ current: e.key })
                              } }>
                                   <Menu.Item key="All">
                                        All
                                   </Menu.Item>
                                   <Menu.Item key="Board">
                                        Board
                                   </Menu.Item>
                                   <Menu.Item key="Graph">
                                        Graph
                                   </Menu.Item>
                                   <Menu.Item key="Recent">
                                        Recent
                                   </Menu.Item>
                                   <Menu.Item key="Others 1">
                                        Others1
                                   </Menu.Item>
                                   <Menu.Item key="Others 2">
                                        Others2
                                   </Menu.Item>
                              </Menu>
                              <div style={{ marginLeft: '17px', marginTop: '17px' }}>
                                   { this.state.current === 'All' ? 
                                        <SideNavList /> : ''
                                   }
                              </div>

                              {/* Option 2 */}
                                   {/* <Tabs defaultActiveKey="1" >
                                        <TabPane tab="Tab 1" key="1">
                                             Content of Tab Pane 1
                                        </TabPane>
                                        <TabPane tab="Tab 2" key="2">
                                             Content of Tab Pane 2
                                        </TabPane>
                                        <TabPane tab="Tab 3" key="3">
                                             Content of Tab Pane 3
                                        </TabPane>
                                   </Tabs> */}

                         </Sider>
                         
                         {/* Editor component */}
                         <Editor />
                    </Layout>
               </div>
          )
     }
}

export default SideNav

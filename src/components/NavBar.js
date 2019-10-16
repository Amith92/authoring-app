import { Row, Col, Icon, Form, Input, Menu, Button, Dropdown, Switch, Badge } from 'antd';
import "./NavBar.css";
import React from 'react'

export default function NavBar() {
     const { Search } = Input;
          // User settings dropdown
          const menu = (
               <Menu>
                    <Menu.Item>
                         Dark mode <Switch size="small" />
                    </Menu.Item>
                    <Menu.Item>
                         <a target="" rel="noopener noreferrer" href="#!">
                         Profile
                    </a>
                    </Menu.Item>
                    {/* <Divider /> */}
                    <Menu.Item>
                         <a target="" rel="noopener noreferrer" href="#!">
                         What's new
                    </a>
                    </Menu.Item>
                    <Menu.Item>
                         <a target="" rel="noopener noreferrer" href="#!">
                         Help
                    </a>
                    </Menu.Item>
                    <Menu.Item>
                         <a target="" rel="noopener noreferrer" href="#!">
                         Send Feedback
                    </a>
                    </Menu.Item>
                    <Menu.Item>
                         <a target="" rel="noopener noreferrer" href="#!">
                         Hints and shortcuts
                    </a>
                    </Menu.Item>
                    {/* <Divider /> */}
                    <Menu.Item>
                         <a target="" rel="noopener noreferrer" href="#!">
                         Log out
                    </a>
                    </Menu.Item>
               </Menu>
          );
          return (
               <div style={{ marginTop: '17px', marginLeft: '50px' }}>
                    <Row>
                         <Col xs={{ span: 3  }} lg={{ span: 2, offset: 0 }}>
                              <a href="#!" style={{ color: 'black' }}><Icon type="menu"  style={{ fontSize: '26px' }}/></a>
                         </Col>
                         <Col xs={{ span: 22  }} lg={{ span: 16, offset: 0 }} className="ap_search_form">
                              <Form>
                                   <Search
                                        placeholder="Search..."
                                        onSearch={value => console.log(value)}
                                   />   
                              </Form>
                         </Col>
                         <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }} className="ap_col">
                              <span style={{ marginLeft: '10px' }}>
                                   <Button icon="user-add" >
                                        Invite Team Member
                                   </Button>
                                   <a href="#!" style={{ marginLeft: '32px', color: 'teal' }}>
                                        <Badge count={17}>
                                             <Icon type="bell" style={{ fontSize: '23px' }}/>
                                        </Badge>
                                   </a>
                                   <Dropdown overlay={menu} trigger={['click']}>
                                        <Button shape="circle" style={{ marginLeft: '35px', color: 'teal' }}>
                                             RA   
                                        </Button>
                                   </Dropdown>
                              </span>
                         </Col>
                    </Row>
               </div>
          )
}

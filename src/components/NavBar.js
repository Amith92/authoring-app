import { Row, Col, Icon, Form, Input, Menu, Button, Dropdown, Switch, Badge } from 'antd';
import React from 'react'
import styles from './Nav.module.css'

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
               <div className={styles.navBarDiv}>
                    <Row>
                         <Col xs={{ span: 3  }} lg={{ span: 2, offset: 0 }}>
                              <a href="#!" className={styles.icon}><Icon type="menu" className={styles.icon} /></a>
                         </Col>
                         <Col xs={{ span: 22  }} lg={{ span: 16, offset: 0 }} className={styles.ap_search_form}>
                              <Form>
                                   <Search
                                        placeholder="Search..."
                                        onSearch={value => console.log(value)}
                                   />   
                              </Form>
                         </Col>
                         <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 0 }} className={styles.ap_col}>
                              <span className={styles.span}>
                                   <Button icon="user-add" >
                                        Invite Team Member
                                   </Button>
                                   <a href="#!" className={styles.invite}>
                                        <Badge count={17}>
                                             <Icon type="bell" className={styles.inviteIcon}/>
                                        </Badge>
                                   </a>
                                   <Dropdown overlay={menu} trigger={['click']}>
                                        <Button shape="circle" className={styles.profileButton}>
                                             RA   
                                        </Button>
                                   </Dropdown>
                              </span>
                         </Col>
                    </Row>
               </div>
          )
}

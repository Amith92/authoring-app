import React, { Component } from 'react'
import { Row, Col, Icon, Form, Input, Menu, Button, Dropdown, Switch, Badge } from 'antd';

export class NavBar extends Component {
     state = {
          theme: 'light',
          current: '1'
     }

     changeTheme = value => {
          this.setState({
            theme: value ? 'dark' : 'light',
          });
     };
     render() {
          const { Search } = Input;
          // User settings dropdown
          const menu = (
               <Menu theme={this.state.theme}>
                    <Menu.Item>
                         Dark mode <Switch size="small" checked={this.state.theme === 'dark'} onChange={this.changeTheme} />
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
               <div style={{ marginTop: '17px', marginLeft: '' }}>
                    <Row style={{ marginLeft: '50px' }}>
                         <Col span={2}>
                              <Icon type="menu"  style={{ fontSize: '26px' }}/>
                         </Col>
                         <Col span={14}>
                              <Form>
                                   <Search
                                        placeholder="Search..."
                                        onSearch={value => console.log(value)}
                                        style={{ width: 810 }}
                                   />   
                              </Form>
                         </Col>
                         <Col span={6} style={{ marginLeft: '80px' }}>
                              <span>
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
}

export default NavBar

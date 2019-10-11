import React, { Component } from 'react'
import { Icon, Divider, Layout, Breadcrumb } from 'antd';

export class Editor extends Component {
     render() {
          const { Header, Footer, Content } = Layout;
          return (
               <div>
                    <Layout style={{backgroundColor: 'white', marginLeft: '35px' }}>
                         <Header style={{ backgroundColor: 'white' }}>  
                         </Header>
                         <Content>
                              <div style={{ marginLeft: '26px' }}>
                              <Breadcrumb style={{ fontSize: '12px' }}>
                                   <Breadcrumb.Item>Home</Breadcrumb.Item>
                                   <Breadcrumb.Item>
                                        <a href="#!">Application Center</a>
                                   </Breadcrumb.Item>
                                   <Breadcrumb.Item>
                                        <a href="#!">Application List</a>
                                   </Breadcrumb.Item>
                                   <Breadcrumb.Item>An Application</Breadcrumb.Item>
                              </Breadcrumb>
                                   <h1 style={{ fontSize: '35px' }}>WYSIWYG Editor</h1>
                              </div> 
                         </Content>
                         <Content>
                              <div style={{ margin: '26px' }}>
                                   <h3>Title 1</h3>
                                   <p>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook.</p>
                                   <Divider />

                                   <h3>Title 2</h3>
                                   <p>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook.</p>
                                   <Divider />
                              </div>
                         </Content>
                         <Footer style={{ backgroundColor: 'white' }}>
                              <a href='#!'>
                                   <Icon type="plus-circle" style={{ fontSize: '21px' }}/>
                              </a>
                         </Footer>
                    </Layout>
               </div>
          )
     }
}

export default Editor

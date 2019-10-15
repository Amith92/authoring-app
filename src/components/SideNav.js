import React, { Component } from 'react'
import { Collapse, Icon, Row, Col, Input, Menu, Layout } from 'antd';
import { connect } from 'react-redux'
import { addCollection, addContainer, addItem, removeContainer } from '../containers/App/actions'

export class SideNav extends Component {
     state = {
          current: 'All',
          collectionName: '',
          containerName: '',
          openAddCollectionForm: false,
          openAddContainerForm: false,
          openAddItemForm: false
     }

     toggleAddCollectionForm = e => {
          this.setState({ openAddCollectionForm: true })
     }

     toggleAddContainerForm = e => {
          this.setState({ openAddContainerForm: true })
     }

     toggleAddItemForm = e => {
          this.setState({ openAddItemForm: true })
     }

     render() {
          const { Panel } = Collapse;
          const PanelStyle = {
               border: 0
          }
          const { collections } = this.props.collections
          const { Sider } = Layout;
          return (
               <div>
                    <Sider style={{ backgroundColor: '#e6fffb', marginTop: '17px' }} width="350">
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
                                   collections ? 
                                        collections.map(collection => {
                                             return (
                                                  <Collapse style={{ backgroundColor: '#e6fffb' }} bordered={false} defaultActiveKey={['']} expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />} >
                                                       <Panel header={collection.name} key={collection.index} style={PanelStyle} extra={ (
                                                                 <span>
                                                                      <a href="#!"><Icon type="plus" onClick={(e) => { 
                                                                           e.stopPropagation()
                                                                           this.toggleAddContainerForm() }}/></a>
                                                                      <Icon type="copy" style={{ marginLeft: '17px' }}/>
                                                                 </span>
                                                            )
                                                       }>
                    
                                                            {collection.containers.map(container => {
                                                                 return (
                                                                      <Collapse style={{ backgroundColor: '#e6fffb' }} defaultActiveKey="" bordered={false} expandIcon={({ isActive }) => <Icon type="caret-right" rotate={ isActive ? 90 : 0 } />}>
                                                                           <Panel header={container.name} key={container.index} style={PanelStyle} extra={(
                                                                                <span>
                                                                                     <a href='#!' onClick={e => {
                                                                                          // console.log(container.index)
                                                                                          e.stopPropagation()
                                                                                          this.toggleAddItemForm()
                                                                                     }}><Icon type="plus" /></a>
                                                                                     <a href="#!" onClick={ e => {
                                                                                          e.stopPropagation()
                                                                                          let index = {
                                                                                               collectionIndex: collection.index,
                                                                                               containerIndex: container.index
                                                                                          }
                                                                                          this.props.removeContainer(index)
                                                                                          // console.log(collection.index, container.index)
                                                                                     }}>
                                                                                          <Icon type="switcher" style={{ marginLeft: '17px' }}/>
                                                                                     </a>
                                                                                     <Icon type="more" style={{ marginLeft: '17px' }}/>
                                                                                </span>
                                                                           )}>
                                                                                {container.items.map(item => {
                                                                                     return (
                                                                                          <a href='#!' onClick={e => {
                                                                                               // console.log(item.index)
                                                                                               let index = {
                                                                                                    [collection.index] : collection.name,
                                                                                                    [container.index]: container.name,
                                                                                                    [item.index]: item.name 
                                                                                               }
                                                                                               // console.log(index)
                                                                                               this.props.handleIndex(index)
                                                                                          }}><p key={item.index} style={{ marginLeft: '35px' }}>{item.name}</p></a>
                                                                                     )
                                                                                })}
                    
                                                                                {/* For adding a item */}
                                                                                {this.state.openAddItemForm ? 
                                                                                     <form style={{ marginLeft: '17px', marginRight: '17px' }} onSubmit={e => {
                                                                                          e.preventDefault();
                                                                                          let formData = {
                                                                                               itemName: this.state.itemName,
                                                                                               index: container.index,
                                                                                               collectionIndex: collection.index,
                                                                                               content: `<p>Begin typing...</p>`
                                                                                          }
                                                                                          this.props.addItem(formData)
                                                                                          this.setState({ openAddItemForm: false })
                                                                                     }}>
                                                                                          <Input placeholder="Enter the item name" name="itemName" onChange={(e) => {
                                                                                               this.setState({ 
                                                                                                    [e.target.name]: e.target.value
                                                                                               })
                                                                                          }}/>
                                                                                     </form>
                                                                                :
                                                                                     null               
                                                                                }
                                                                           </Panel>
                                                                      </Collapse>
                                                                 )
                                                            })}
                    
                                                            {/* For adding a container */}
                                                            {this.state.openAddContainerForm ? 
                                                                 <form style={{ marginLeft: '17px', marginRight: '17px' }} onSubmit={e => {
                                                                      e.preventDefault();
                                                                      let formData = {
                                                                           containerName: this.state.containerName,
                                                                           index: collection.index
                                                                      }
                                                                      // console.log(formData)
                                                                      this.props.addContainer(formData)
                                                                      this.setState({ openAddContainerForm: false })
                                                                 }}>
                                                                      <Input placeholder="Enter the container name" name="containerName" onChange={(e) => {
                                                                           this.setState({ 
                                                                                [e.target.name]: e.target.value
                                                                           })
                                                                      }}/>
                                                                 </form>
                                                            :
                                                                 null               
                                                            }
                                                       </Panel>
                                                  </Collapse>
                                             )
                                        }): '' : null }
                                        <br></br>
                    
                                        {/* For adding a collection */}
                                        {this.state.openAddCollectionForm ? 
                                             <form onSubmit={e => {
                                                  e.preventDefault();
                                                  this.props.addCollection(this.state.collectionName)
                                                  this.setState({ openAddCollectionForm: false })
                                             }}>
                                                  <Input placeholder="Enter the collection name" name="collectionName" onChange={(e) => {
                                                       this.setState({ 
                                                            [e.target.name]: e.target.value
                                                       })
                                                  }}/>
                                             </form>
                                        :
                                             null               
                                        }
                         </div>
                    </Sider>

                    <br></br>
                    <Row type="flex" justify="center">
                         <Col span={4}>
                              <a href="#!" onClick={(e) => { this.toggleAddCollectionForm() }}> <Icon type="plus-circle" style={{ fontSize: '21px' }}/> </a>
                         </Col>
                    </Row>
                    <br></br>
               </div>
          )
     }
}

const mapDispatchToProps = dispatch => {
     return {
          addCollection: (formData) => {
               dispatch(addCollection(formData))
          },
          addContainer: (formData) => {
               dispatch(addContainer(formData))
          },
          removeContainer: (index) => {
               dispatch(removeContainer(index))
          },
          addItem: (formData) => {
               dispatch(addItem(formData))
          }
     }
}

const mapStateToProps = state => {
     // console.log(state.collections)
     return {
          collections: state.collections
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)

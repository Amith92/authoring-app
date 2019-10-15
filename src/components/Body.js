import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd';
import Editor from './Editor';
import SideNav from './SideNav';
import { connect } from 'react-redux'

export class Body extends Component {
     state = {
          current: 'All',
          index: undefined,
          item: undefined
     }
     handleIndex = index => {
          // console.log(index)
          this.setState({ index }, () => {
               let indexKeyArr = [];
               // let indexValueArr = [];
               if(index) {
                    indexKeyArr = Object.keys(index)
                    // indexValueArr = Object.values(index)
               }
               const { collections } = this.props.collections;
               let filteredCollection = collections.filter(collection => {
                    return collection.index === indexKeyArr[0]
               });
               let filteredContainer = filteredCollection[0].containers.filter(container => {
                    return container.index === indexKeyArr[1]
               });
               let filteredItem = filteredContainer[0].items.filter(item => {
                    return item.index === indexKeyArr[2]
               })
               // console.log(filteredItem)
               this.setState({ item: filteredItem })
          })
     }
     render() {
          return (
               <div>
                    <Layout style={{ backgroundColor: 'white' }}>
                         <Row>
                              <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 0 }}>
                                   {/* Side Nav component */}
                                   <SideNav handleIndex={this.handleIndex}/>
                              </Col>
                              <Col xs={{ span: 24, offset: 0 }} lg={{ span: 16, offset: 0 }}>
                                   {/* Editor component */}
                                   <Editor index={this.state.index} item={this.state.item}/>
                              </Col>
                         </Row>
                    </Layout>
               </div>
          )
     }
}

const mapStateToProps = state => {
     // console.log(state.collections)
     return {
          collections: state.collections
     }
}

export default connect(mapStateToProps)(Body)
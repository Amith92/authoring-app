import React, { Component } from 'react'
import { Layout, Breadcrumb, Divider } from 'antd';
import { Editor as WYSIWYGEditor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import bold from './icons/bold.png'
import italic from './icons/italic.png'
import link from './icons/link.png'
import { connect } from 'react-redux'
import { editItem } from '../containers/App/actions'

export class Editor extends Component {
     constructor(props) {
          super(props)
          this.state = {
               content: ''
          }
     }
     
     onContentStateChange = (contentState) => {
          this.setState({
               content: contentState,
          }, );
     };
     render() {
          const { index, item } = this.props
          
          let indexKeyArr = [];
          let indexValueArr = [];
          if(index) {
               indexKeyArr = Object.keys(index)
               indexValueArr = Object.values(index)
          }
          
          const { Header, Content } = Layout;
          return (
               <div>
                    <Layout style={{backgroundColor: 'white', marginLeft: '35px' }}>
                         <Header style={{ backgroundColor: 'white' }}>  
                         </Header>
                         <Content>
                              <div style={{ marginLeft: '26px' }}>
                              <Breadcrumb style={{ fontSize: '12px' }}>
                                   <Breadcrumb.Item>{indexValueArr.length > 0 ? <span>{indexValueArr[0]}</span>: '' }</Breadcrumb.Item>
                                   <Breadcrumb.Item>
                                   {indexValueArr.length > 0 ? <span>{indexValueArr[1]}</span>: '' }
                                   </Breadcrumb.Item>
                                   {/* <Breadcrumb.Item>
                                   {indexValueArr.length > 0 ? <span>{indexValueArr[2]}</span>: '' }
                                   </Breadcrumb.Item> */}
                                   
                              </Breadcrumb>

                                   {indexKeyArr.length > 0 ?
                                        <div style={{ marginLeft: '35px', marginRight: '35px', marginBottom: '35px' }}>
                                             {/* For Title */}
                                             {item ? 
                                             <span>
                                             <h1 style={{ fontSize: '35px' }}>{item[0].name} </h1>

                                             <WYSIWYGEditor
                                                  toolbarOnFocus
                                                  wrapperClassName="demo-wrapper"
                                                  editorClassName="demo-editor"
                                                  toolbarStyle={{ backgroundColor: 'black', borderRadius: '4px', padding: '5px', width: 'fit-content' }}
                                                  contentState={item[0].content}
                                                  onContentStateChange={(contentState) => {
                                                       this.setState({
                                                            content: contentState,
                                                       }, 
                                                            this.props.editItem({
                                                                 index: indexKeyArr,
                                                                 content: this.state.content
                                                            })
                                                       );
                                                  }}
                                                  toolbar={
                                                       {
                                                            options: ['inline', 'blockType', 'list', 'link'],
                                                            inline: { inDropdown: false, options: ['bold', 'italic', ],
                                                            bold: { icon: bold }, italic: { icon: italic }},
                                                            blockType: { inDropdown: false, options: ['Code','Normal', 'H1', 'H2', 'H3'] },
                                                            list: { inDropdown: false, options: [] },
                                                            link: { inDropdown: false, options: ['link'], link: { icon: link } }
                                                       }
                                                  }
                                             /></span> : '' }

                                             <Divider/>

                                             </div>         
                                        :
                                        <p>Select a file to display..</p>
                                   }
                              </div> 
                         </Content>
                    
                         {/* <Footer style={{ backgroundColor: 'white' }}>
                              <a href='#!'>
                                   <Icon type="plus-circle" style={{ fontSize: '21px' }}/>
                              </a>
                         </Footer> */}
                    </Layout>
               </div>
          )
     }
}

const mapDispatchToProps = dispatch => {
     return {
          editItem: (formData) => {
               dispatch(editItem(formData))
          }
     }
}

export default connect(null, mapDispatchToProps)(Editor)
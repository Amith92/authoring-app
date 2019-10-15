import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd';
import { Editor as WYSIWYGEditor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import bold from './icons/bold.png'
import italic from './icons/italic.png'
import link from './icons/link.png'
import { convertFromRaw, convertToRaw } from 'draft-js';

export class Editor extends Component {
     constructor(props) {
          super(props)
          const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
          const contentState = convertFromRaw(content);

          // console.log(convertRaw(contentState))
          this.state = {
               contentState
          }
     }
     
     onContentStateChange = (contentState) => {
          this.setState({
               contentState,
          });
     };
     render() {
          const { index, item } = this.props
          console.log(item)
          let indexKeyArr = [];
          let indexValueArr = [];
          if(index) {
               indexKeyArr = Object.keys(index)
               indexValueArr = Object.values(index)
          }
          const { Header, Content } = Layout;
          const { contentState } = this.state;
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
                                   <Breadcrumb.Item>
                                   {indexValueArr.length > 0 ? <span>{indexValueArr[2]}</span>: '' }
                                   </Breadcrumb.Item>
                                   
                              </Breadcrumb>
                                   <h1 style={{ fontSize: '35px' }}>WYSIWYG Editor </h1>
                                   
                                   {indexKeyArr.length > 0 ?
                                        <div style={{ marginLeft: '35px', marginRight: '35px', marginBottom: '35px' }}>
                                             {/* For Title */}
                                             <WYSIWYGEditor
                                                  toolbarOnFocus
                                                  // editorState={convertToRaw(contentState)}
                                                  wrapperClassName="demo-wrapper"
                                                  editorClassName="demo-editor"
                                                  toolbarStyle={{ backgroundColor: 'black', borderRadius: '4px', padding: '17px' }}
                                                  onContentStateChange={this.onContentStateChange}
                                                  toolbar={
                                                       {
                                                            options: ['inline', 'blockType', 'list', 'link'],
                                                            inline: { inDropdown: false, options: ['bold', 'italic', ],
                                                            bold: { icon: bold }, italic: { icon: italic }},
                                                            blockType: { inDropdown: false, options: ['Code'] },
                                                            list: { inDropdown: false, options: [] },
                                                            link: { inDropdown: false, options: ['link'], link: { icon: link } }
                                                       }
                                                  }
                                             />
                                             <textarea
                                                  disabled
                                                  value={JSON.stringify(contentState, null, 4)}
                                             />

                                             {/* For body */}
                                             <WYSIWYGEditor
                                                  toolbarOnFocus
                                                  // editorStyle={{ border: '1px solid #b5f5ec', borderRadius: '5px' }}
                                                  toolbarStyle={{ backgroundColor: 'black', borderRadius: '4px', padding: '17px' }}
                                                  onEditorStateChange={this.onEditorStateChange}
                                                  toolbar={
                                                       {
                                                            options: ['blockType', 'link'],
                                                            blockType: { inDropdown: false, options: ['Normal', 'H1', 'H2', 'H3'] },
                                                            link: { inDropdown: false, options: ['link'], link: { icon: link } }
                                                       }
                                                  }
                                             />
                                             </div>         
                                        :
                                        null 
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

export default Editor
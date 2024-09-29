import './codeEditorContainer.scss'
import "./index.scss"
import { Editor } from '@monaco-editor/react'

const editorOptions = {
    fontSize: 18,
    wordWrap: 'on'
}

function CodeEditorContainer() {
    const onChnageCode = (newCode)=>{
        //TODO: do somthing
        // console.log({newCode});
    }
  return (
    <div className='editor-container'>
        <div className="editor-header">
            <div className="editor-left-container">
                <h3 className='editor-title'>{'Title of card'}</h3>
                <span className="material-icons">edit</span>
                <button>Save Code</button>
            </div>
            <div className="editor-right-container">
                <div className="select-container">
                    <select name="language">
                        <option value="cpp">cpp</option>
                        <option value="javascript">javascript</option>
                        <option value="java">java</option>
                        <option value="python">python</option>
                    </select>
                </div>
                <div className="select-container">
                    <select name="theme">
                        <option value="vs-dark">vs-dark</option>
                        <option value="vs-light">vs-light</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="editor-body">
            <Editor 
                height={'100%'}
                language={'javascript'}
                options={editorOptions}
                theme='vs-dark'
                onChange={onChnageCode}
            />
        </div>
        <div className="editor-footer">
            <button className="fullscreen">
                <span className="material-icons">fullscreen</span>
                <span>Full Screen</span>
            </button>
            <label htmlFor="import-code">
                <span className="material-icons">download</span>
                <span>Import Code</span>
            </label>
            <input type="file" id="import-code" style={{display:'none'}} />
            <button>
                <span className="material-icons">upload</span>
                <span>Export Code</span>
            </button>
            <button className="run">Run Code</button>
        </div>
    </div>
  )
}

export default CodeEditorContainer
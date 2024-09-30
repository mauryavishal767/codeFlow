import {  useContext, useEffect, useState } from 'react'
import './codeEditorContainer.scss'
import "./index.scss"
import { Editor } from '@monaco-editor/react'
import { PlaygroundContext } from '../../ContexProvider/PlaygroundProvider'
import { ModelContext, ModelConstant } from '../../ContexProvider/ModelProvider'
import Model from '../models/Model'
import { GET, POST } from '../../APIcalls/judge0'

const editorOptions = {
    fontSize: 18,
    wordWrap: 'on',

}

const fileExtention = {
    cpp: 'cpp',
    javascript: 'js',
    java: 'java',
    python: 'py'
}

const styles = {
    fullscreen: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 3,
    },
    miniscreen: {
        maxWidth: '66vw',
    }
}

function CodeEditorContainer({fileId, folderId, input}) {
    const {getDefaultCode, getDefaultLanguage, saveCodeNLanguage, getFileName} = useContext(PlaygroundContext)
    const {openModel, setModelPayload,} = useContext(ModelContext)
    
    const [code, setCode] = useState(()=>{ return getDefaultCode(folderId, fileId)})
    const [language, setLanguage] = useState(()=>{return getDefaultLanguage(folderId, fileId)})
    const [fileName, setFileName] = useState(()=>{return getFileName(folderId, fileId)})
    const [theme, setTheme] = useState('vs-dark')
    const [isFullscreen, setIsFullscreen] = useState(false)

    const onChangeCode = (newCode)=>{
        setCode(newCode)
    }

    const onImportCode = (e)=>{
        const file = e.target.files[0]
        if(file.type.includes('text')){
            let importFileLang = file.type.split("/")[1];
            const fileReader = new FileReader()
            fileReader.readAsText(file);
            fileReader.onload = (value)=>{
                const importedCode = value.target.result
                setCode(importedCode)
                setLanguage(importFileLang)
            }
        } else alert('Please Select Program File')
        e.target.value = null
        
    }

    const onExportCode = ()=>{
        const codeBlob = new Blob([code],{ type: `text/${language}`})
        const url = URL.createObjectURL(codeBlob)

        const link = document.createElement('a')
        link.href = url
        const fileName = document.getElementById('title').innerText
        link.download = `${fileName}.${fileExtention[language]}`
        link.click()
    }
    
    const onLangChange = (e)=>{
        const language = e.target.value
        setLanguage(language)
    }

    const screenWidthHandler = ()=>{
        setIsFullscreen((prev)=> !prev)
    }

    const onSave = (e)=>{
        const saved = saveCodeNLanguage(folderId, fileId, code, language)
        if(saved){
            e.target.innerText = "Saved!"
            setTimeout(() => {
                e.target.innerText = "Save Code"
            }, 2000);
        }
    }

    const editFileName = ()=>{
        setModelPayload({id: fileId, parentId: folderId})
        openModel(ModelConstant.EDIT_PLAYGROUND_FILE)
    }

    const onRunCode = async ()=>{
        const response = POST(code,input,language);
        const token = response.token
        GET(token)
    }

    useEffect(() => {
        setFileName(()=>{return getFileName(folderId, fileId)})
    }, [editFileName])
    

  return (
    <div className='editor-container' style={isFullscreen? styles.fullscreen : styles.miniscreen}>
        <div className="editor-header">
            <div className="editor-left-container">
                <h3 className='editor-title' id='title'>{fileName}</h3>
                <span className="material-icons" onClick={editFileName}>edit</span>
                <button onClick={onSave}>Save Code</button>
            </div>
            <div className="editor-right-container">
                <div className="select-container">
                    <select name="language" value={language} onChange={onLangChange}>
                        <option value="cpp">cpp</option>
                        <option value="javascript">javascript</option>
                        <option value="java">java</option>
                        <option value="python">python</option>
                    </select>
                </div>
                <div className="select-container">
                    <select name="theme" onChange={(e)=> setTheme(e.target.value)}>
                        <option value="vs-dark">vs-dark</option>
                        <option value="vs-light">vs-light</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="editor-body">
            <Editor 
                height={isFullscreen? '100%' : '80vh'}
                language={language}
                options={editorOptions}
                theme={theme}
                onChange={onChangeCode}
                value={code}
            />
        </div>
        <div className="editor-footer">
            <button className="fullscreen" onClick={screenWidthHandler}>
                { !isFullscreen && <span className="material-icons">fullscreen</span> }
                { !isFullscreen && <span>Full Screen</span> }
                { isFullscreen && <span className="material-icons">fullscreen_exit</span>}
                { isFullscreen && <span>Minimize Screen</span>}
            </button>
            <label htmlFor="import-code">
                <span className="material-icons">download</span>
                <span>Import Code</span>
            </label>
            <input type="file" id="import-code" style={{display:'none'}} onChange={onImportCode}/>
            <button onClick={onExportCode}>
                <span className="material-icons">upload</span>
                <span>Export Code</span>
            </button>
            <button className="run" onClick={onRunCode}>Run Code</button>
        </div>
        <Model/>
    </div>
  )
}

export default CodeEditorContainer
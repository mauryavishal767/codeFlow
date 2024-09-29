import { useParams } from "react-router-dom"
import { useRef, useState } from "react";
import logo from '../../assets/logo.png'
import "./index.scss"
import CodeEditorContainer from "./CodeEditorContainer";

const PlaygroundScreen = () => {
  const params = useParams();
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const { fileId, folderId } = params;

  const onImportInput = (e)=>{
    const inputfile = e.target.files[0]
    if(inputfile.type.includes('text')){
      const fileReader = new FileReader()
      fileReader.readAsText(inputfile);
      fileReader.onload = (value)=>{
        const importedCode = value.target.result
        setInput(importedCode)
      }
    } else alert('Please Select Program File')
    e.target.value = null 
  }

  const onChangeInput = (e)=>{
    setInput(e.target.value)
  }

  const onExportOutput = ()=>{
    const codeBlob = new Blob([output],{ type: `text/plain`})
    const url = URL.createObjectURL(codeBlob)

    const link = document.createElement('a')
    link.href = url
    const fileName = document.getElementById('title').innerText + '-output'
    link.download = `${fileName}.txt`
    link.click()
  }

  return (
    <div className="playground-container">
      <div className="header-container">
        <img src={logo} className="logo" />
        <h1>Code Flow</h1>
      </div>
      <div className="content-container">
        <CodeEditorContainer fileId={fileId} folderId={folderId}/>
        <div className="input-container">
          <div className="input-header">
            <b>Input:</b>
            <label htmlFor="input">
              <span className="material-icons">download</span>
              <span>Import Input</span>
            </label>
            <input type="file" id="input" style={{ display: "none" }} onChange={onImportInput}/>
          </div>
          <textarea name="" id="" value={input} onChange={onChangeInput}></textarea>
        </div>
        <div className="output-container">  
          <div className="output-header">
            <b>Output:</b>
            <button onClick={onExportOutput}>
              <span className="material-icons">upload</span>
              <span>Export Output</span>
            </button>
          </div>
          <textarea name="" id="" value={output} onChange={(e)=> setOutput(e.target.value)} disabled></textarea>
        </div>
      </div>
    </div>
  );
}

export default PlaygroundScreen;
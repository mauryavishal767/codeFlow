import { useParams } from "react-router-dom"
import logo from '../../assets/logo.png'
import "./index.scss"
import CodeEditorContainer from "./CodeEditorContainer";

const PlaygroundScreen = () => {
  const params = useParams();
  const { fileId, folderId } = params;
  return (
    <div className="playground-container">
      <div className="header-container">
        <img src={logo} className="logo" />
        <h1>Code Flow</h1>
      </div>
      <div className="content-container">
        <CodeEditorContainer/>
        <div className="input-container">
          <div className="input-header">
            <b>Input:</b>
            <label htmlFor="input">
              <span className="material-icons">download</span>
              <span>Import Input</span>
            </label>
            <input type="file" id="input" style={{ display: "none" }} />
          </div>
          <textarea name="" id="" ></textarea>
        </div>
        <div className="output-container">
          <div className="output-header">
            <b>Output:</b>
            <button>
              <span className="material-icons">upload</span>
              <span>Export Output</span>
            </button>
          </div>
          <textarea name="" id=""></textarea>
        </div>
      </div>
    </div>
  );
}

export default PlaygroundScreen;
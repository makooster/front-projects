import React, { useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';

const CodeEditor = ({ language, onRun }) => {
  const editorRef = useRef(null);

  React.useEffect(() => {
    editorRef.current = CodeMirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: true,
      mode: language,
      theme: 'default',
      lineWrapping: true,
    });
  }, [language]);

  const handleRun = () => {
    const code = editorRef.current.getValue();
    onRun(code);
  };

  return (
    <div className="editor-container">
      <textarea id="editor" />
      <button onClick={handleRun} className="run-button">
        Run
      </button>
    </div>
  );
};

export default CodeEditor;

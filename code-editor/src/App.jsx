import React, { useState } from 'react';
import CodeEditor from './CodeEditor.jsx';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('javascript'); 
  const [output, setOutput] = useState('');               
  const [error, setError] = useState(null);               

  const runCode = async (code) => {
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ language, code }),
      });
      const result = await response.json();

      if (result.status === 'success') {
        setOutput(result.output);
        setError(null);
      } else {
        setOutput('');
        setError(result.error);
      }
    } catch (err) {
      console.error('Error during fetch:', err);
      setOutput('');
      setError('Network Error: Unable to connect to the server.');
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Simple Code Editor</h1>
        <p>Choose a language, write your code, and execute it!</p>
      </header>
      <main>
        <div className="settings">
          <label htmlFor="language">Programming Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>
        <CodeEditor language={language} onRun={runCode} />
        <div className="output-container">
          <h3>Output:</h3>
          {output && <pre className="output success">{output}</pre>}
          {error && <pre className="output error">{error}</pre>}
        </div>
      </main>
    </div>
  );
};

export default App;

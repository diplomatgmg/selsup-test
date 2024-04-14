import React from 'react'
import ReactDOM from 'react-dom/client'
import ParamEditor from './ParamEditor'

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
)
root.render(
  <React.StrictMode>
    <ParamEditor />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import ParamEditor, { type Param } from './ParamEditor'
import './style.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
)

const params: Param[] = [
  {
    id: 1,
    name: 'Назначение',
    type: 'string'
  },
  {
    id: 2,
    name: 'Длина',
    type: 'string'
  }
]

const model = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное'
    },
    {
      paramId: 2,
      value: 'макси'
    }
  ]
}

root.render(
  <React.StrictMode>
    <ParamEditor params={params} model={model} />
  </React.StrictMode>
)

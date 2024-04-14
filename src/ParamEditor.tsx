import React, { useState } from 'react'

interface Param {
  id: number
  name: string
  type: 'string'
}

interface ParamValue {
  paramId: number
  value: string
}

interface Model {
  paramValues: ParamValue[]
  // colors: Color[] ????
}

interface Props {
  params: Param[]
  model: Model
}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues)
  const [jsonModel, setJsonModel] = useState<string>('')

  const handleChange = (paramId: number, value: string): void => {
    const updatedValues = paramValues.map(param => {
      if (param.paramId === paramId) {
        return { ...param, value }
      }
      return param
    })
    setParamValues(updatedValues)
  }

  const handleGetModel = (): void => {
    setJsonModel(JSON.stringify(paramValues, null, 2))
  }

  return (
    <div className="param-editor">
      {params.map(param => (
        <div key={param.id} className="param-item">
          <label>{param.name}</label>
          <input
            type="text"
            value={paramValues.find(p => p.paramId === param.id)?.value ?? ''}
            onChange={e => handleChange(param.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleGetModel}>getModel</button>
      {jsonModel.length !== 0 && <pre>{jsonModel}</pre>}
    </div>
  )
}

export default ParamEditor
export type { Param }

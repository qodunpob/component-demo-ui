import React from 'react'
import { type ControlDefinition } from '../ControlPanel.types'
import { TextControl } from './textControl'
import './Control.css'
import { CheckboxControl } from './checkboxControl'
import { SelectControl } from './selectControl'

export interface ControlProps {
  control: ControlDefinition
  onChange?: (name: string, value: any) => void
}

export const Control: React.FC<ControlProps> = ({ control, onChange }) => {
  switch (control.type) {
  case 'text':
    return (
      <TextControl
        className='component-demo-ui-control'
        control={control}
        onChange={onChange}
      />
    )
  case 'checkbox':
    return <CheckboxControl control={control} onChange={onChange} />
  case 'select':
    return (
      <SelectControl
        className='component-demo-ui-control'
        control={control}
        onChange={onChange}
      />
    )
  }
}

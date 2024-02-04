import { type CheckboxControlDefinition } from '../../ControlPanel.types'
import React, { type ChangeEventHandler, useCallback } from 'react'
import './CheckboxControl.css'

export interface CheckboxControlProps {
  control: CheckboxControlDefinition
  onChange?: (name: string, isChecked: boolean) => void
}

export const CheckboxControl: React.FC<CheckboxControlProps> = ({
  control,
  onChange
}) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const isChecked = e.target.checked
      onChange?.(control.name, isChecked)
    },
    [control.name, onChange]
  )

  return (
    <label className='component-demo-ui-checkbox-control'>
      <input
        className='component-demo-ui-checkbox-control-input'
        name={control.name}
        type='checkbox'
        defaultChecked={control.initialValue}
        onChange={handleChange}
      />
    </label>
  )
}

import React, { type ChangeEventHandler, useCallback } from 'react'
import { type SelectControlDefinition } from '../../../models/ControlDefinition'
import cn from 'classnames'
import { SelectControlOption } from './SelectControlOption'
import './SelectControl.css'

export interface SelectControlProps {
  className?: string
  control: SelectControlDefinition
  onChange?: (name: string, value: any) => void
}

export const SelectControl: React.FC<SelectControlProps> = ({
  className,
  control,
  onChange
}) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (e) => {
      const value = e.target.value
      onChange?.(control.name, value)
    },
    [control.name, onChange]
  )

  return (
    <select
      data-testid={`component-demo-ui-control-${control.name}`}
      name={control.name}
      className={cn(className, 'component-demo-ui-select-control')}
      defaultValue={control.initialValue}
      onChange={handleChange}
    >
      {control.options.map((option, index) => (
        <SelectControlOption key={index} option={option} />
      ))}
    </select>
  )
}

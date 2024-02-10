import { type TextControlDefinition } from '~/models'
import React, { type ChangeEventHandler, useCallback } from 'react'
import cn from 'classnames'

export interface TextControlProps {
  className?: string
  control: TextControlDefinition
  onChange?: (name: string, value: string) => void
}

export const TextControl: React.FC<TextControlProps> = ({
  className,
  control,
  onChange
}) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      const value = e.target.value
      onChange?.(control.name, value)
    },
    [control.name, onChange]
  )

  return (
    <input
      data-testid={`component-demo-ui-control-${control.name}`}
      className={cn(className)}
      name={control.name}
      defaultValue={control.initialValue}
      onChange={handleChange}
    />
  )
}

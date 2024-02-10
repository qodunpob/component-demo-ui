import React, { type ChangeEventHandler } from 'react'
import cn from 'classnames'
import './Switcher.css'

export interface SwitcherProps {
  className?: string
  labelOn?: string
  labelOff?: string
  defaultChecked?: boolean
  onChange?: (isChecked: boolean) => void
}

export const Switcher = React.memo<SwitcherProps>(
  ({
    className,
    labelOn = 'On',
    labelOff = 'Off',
    defaultChecked,
    onChange
  }) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const checked = e.target.checked
      onChange?.(checked)
    }

    return (
      <label className={cn('switcher', className)}>
        <input
          className='switcher_input'
          type='checkbox'
          defaultChecked={defaultChecked}
          onChange={handleChange}
        />
        <span className='switcher_label switcher_label--on'>{labelOn}</span>
        <span className='switcher_label switcher_label--off'>{labelOff}</span>
      </label>
    )
  }
)

Switcher.displayName = 'Switcher'

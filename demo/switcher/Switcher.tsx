import React from 'react'
import cn from 'classnames'
import { useSwitcher } from './useSwitcher'
import './Switcher.css'

export interface SwitcherProps {
  className?: string
  labelOn?: string
  labelOff?: string
  defaultChecked?: boolean
  onChange?: (isChecked: boolean) => void
}

export const Switcher: React.FC<SwitcherProps> = ({
  className,
  labelOn = 'On',
  labelOff = 'Off',
  defaultChecked,
  onChange
}) => {
  const { isChecked, toggle } = useSwitcher({ defaultChecked, onChange })

  return (
    <label className={cn('switcher', { 'switcher--on': isChecked }, className)}>
      <input
        className='switcher_input'
        type='checkbox'
        checked={isChecked}
        onChange={toggle}
      />
      <span className='switcher_label switcher_label--on'>{labelOn}</span>
      <span className='switcher_label switcher_label--off'>{labelOff}</span>
    </label>
  )
}

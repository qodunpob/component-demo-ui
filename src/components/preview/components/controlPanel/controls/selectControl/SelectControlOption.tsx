import { type SelectControlOptionDefinition } from '../../ControlPanel.types'
import React from 'react'

export interface SelectControlOptionProps {
  option: SelectControlOptionDefinition
}

export const SelectControlOption: React.FC<SelectControlOptionProps> = ({
  option
}) => {
  const { label, value } =
    typeof option === 'string' || typeof option === 'number'
      ? { label: option, value: option }
      : option

  return <option value={value}>{label}</option>
}

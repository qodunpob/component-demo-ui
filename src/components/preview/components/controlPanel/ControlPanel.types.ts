interface GenericControlDefinition {
  name: string
  initialValue?: any
}

export interface TextControlDefinition extends GenericControlDefinition {
  type: 'text'
}

export interface CheckboxControlDefinition extends GenericControlDefinition {
  type: 'checkbox'
  initialValue?: boolean
}

export interface SelectControlDefinition extends GenericControlDefinition {
  type: 'select'
  options: SelectControlOptionDefinition[]
}

export type SelectControlOptionDefinition =
  | { label: string, value: any }
  | string
  | number

export type ControlDefinition =
  | TextControlDefinition
  | CheckboxControlDefinition
  | SelectControlDefinition

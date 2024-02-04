import React, { Fragment } from 'react'
import { type ControlDefinition } from './ControlPanel.types'
import './ControlPanel.css'
import { Control } from './controls'

export interface ControlPanelProps {
  controls: ControlDefinition[]
  onChange?: (name: string, value: any) => void
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  controls,
  onChange
}) => (
  <form className='component-demo-ui-control-panel'>
    <h3 className='component-demo-ui-control-panel-title'>Controls</h3>
    {controls.map((control) => (
      <Fragment key={control.name}>
        <div className='component-demo-ui-control-panel-label'>
          {control.name}
        </div>
        <div className='component-demo-ui-control-panel-control'>
          <Control control={control} onChange={onChange} />
        </div>
      </Fragment>
    ))}
  </form>
)

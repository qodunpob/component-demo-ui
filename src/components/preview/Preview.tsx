import React, { forwardRef, type ReactElement } from 'react'
import './Preview.css'
import { type ControlDefinition, ControlPanel, Inspector } from './components'
import { type PreviewRef } from './Preview.types'
import { useControlPanel, useInspector } from './hooks'
import { isNotEmptyArray, isNotEmptyString } from '../../utils/common.utils'

export interface PreviewProps {
  title: string
  children: ReactElement
  caption?: string
  controls?: ControlDefinition[]
  showInspector?: boolean
  inspectorTitle?: string
}

export const Preview = forwardRef<PreviewRef, PreviewProps>(
  (
    {
      title,
      caption,
      controls,
      showInspector = false,
      inspectorTitle,
      children
    },
    ref
  ) => {
    const { component, handleControlsChange } = useControlPanel({
      children,
      controls
    })
    const { data } = useInspector(ref)
    return (
      <div className='component-demo-ui-container component-demo-ui-preview'>
        <h1 className='component-demo-ui-title'>{title}</h1>
        {isNotEmptyString(caption) && (
          <p className='component-demo-ui-caption'>{caption}</p>
        )}
        {component}
        {isNotEmptyArray(controls) && (
          <ControlPanel controls={controls} onChange={handleControlsChange} />
        )}
        {showInspector && <Inspector title={inspectorTitle} data={data} />}
      </div>
    )
  }
)

Preview.displayName = 'Preview'

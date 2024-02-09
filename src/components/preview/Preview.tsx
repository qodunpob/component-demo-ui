import React, { forwardRef, type ReactElement } from 'react'
import './Preview.css'
import { type ControlDefinition, ControlPanel, Inspector } from './components'
import { type PreviewRef } from './Preview.types'
import { useControlPanel, useInspector } from './hooks'
import { isNotEmptyArray, isNotEmptyString } from '../../utils/common.utils'
import cn from 'classnames'

export interface PreviewProps {
  className?: string
  title: string
  children: ReactElement
  caption?: string
  description?: string
  controls?: ControlDefinition[]
  showInspector?: boolean
  inspectorTitle?: string
}

export const Preview = forwardRef<PreviewRef, PreviewProps>(
  (
    {
      className,
      title,
      caption,
      description,
      controls,
      showInspector = false,
      inspectorTitle,
      children,
      ...restProps
    },
    ref
  ) => {
    const { component, handleControlsChange } = useControlPanel({
      children,
      controls
    })
    const { data } = useInspector(ref)
    return (
      <div
        className={cn(
          className,
          'component-demo-ui-container',
          'component-demo-ui-preview'
        )}
        {...restProps}
      >
        <h1 className='component-demo-ui-preview-title'>{title}</h1>
        {isNotEmptyString(caption) && (
          <p className='component-demo-ui-preview-caption'>{caption}</p>
        )}
        {component}
        {isNotEmptyArray(controls) && (
          <ControlPanel controls={controls} onChange={handleControlsChange} />
        )}
        {showInspector && <Inspector title={inspectorTitle} data={data} />}
        {isNotEmptyString(description) && (
          <p className='component-demo-ui-preview-description'>{description}</p>
        )}
      </div>
    )
  }
)

Preview.displayName = 'Preview'

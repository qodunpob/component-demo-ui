import React, { type PropsWithChildren } from 'react'
import './Section.css'
import cn from 'classnames'

export interface SectionProps {
  className?: string
  title: string
}

export const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  className,
  title,
  children
}) => (
  <div
    className={cn(
      className,
      'component-demo-ui-container',
      'component-demo-ui-section'
    )}
  >
    <h2 className='component-demo-ui-section-title'>{title}</h2>
    {children}
  </div>
)

import { type PropDefinition } from './PropList.types'
import React, { Fragment } from 'react'
import cn from 'classnames'
import './PropList.css'

export interface PropListProps {
  className?: string
  items: PropDefinition[]
}

export const PropList: React.FC<PropListProps> = ({ className, items }) => (
  <dl className={cn(className, 'component-demo-ui-prop-list')}>
    {items.map(({ propName, description }) => (
      <Fragment key={propName}>
        <dt className='component-demo-ui-prop-list-name'>{propName}</dt>
        <dd className='component-demo-ui-prop-list-description'>
          {description}
        </dd>
      </Fragment>
    ))}
  </dl>
)

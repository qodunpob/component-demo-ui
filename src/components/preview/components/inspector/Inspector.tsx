import React from 'react'
import { ObjectInspector } from 'react-inspector'
import './Inspector.css'
import { isNotEmptyString } from '../../../../utils/common.utils'

export interface InspectorProps {
  title?: string
  data?: any
}

export const Inspector: React.FC<InspectorProps> = ({ title, data }) => (
  <div className='component-demo-ui-inspector'>
    {isNotEmptyString(title) && (
      <h3 className='component-demo-ui-inspector-title'>{title}</h3>
    )}
    <ObjectInspector data={data} />
  </div>
)

import React from 'react'
import { render, type RenderResult } from '@testing-library/react'
import { PropList, type PropListProps } from '~/components'

describe('PropList', () => {
  it('should display provided props and their description', () => {
    const { baseElement } = renderComponent({
      items: [
        { propName: 'firstProp', description: 'description of the firstProp' },
        {
          propName: 'secondProp',
          description: (
            <>
              description of the <i>secondProp</i>
            </>
          )
        }
      ]
    })
    expect(baseElement).toMatchSnapshot()
  })
})

const renderComponent = ({
  items = [],
  ...restProps
}: Partial<PropListProps> = {}): RenderResult =>
  render(<PropList items={items} {...restProps} />)

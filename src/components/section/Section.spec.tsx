import React from 'react'
import { render, type RenderResult } from '@testing-library/react'
import { Section, type SectionProps } from '~/components'

describe('Section', () => {
  it('should display the title and content of the section', () => {
    const { baseElement } = renderComponent()
    expect(baseElement).toMatchSnapshot()
  })
})

const renderComponent = ({
  title = 'Section',
  ...otherProps
}: Partial<SectionProps> = {}): RenderResult =>
  render(
    <Section title={title} {...otherProps}>
      <p>
        Here is the <b>section content</b>
      </p>
    </Section>
  )

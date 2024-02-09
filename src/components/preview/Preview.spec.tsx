import React, { useEffect, useRef } from 'react'
import { Preview, type PreviewProps } from './Preview'
import {
  fireEvent,
  render,
  type RenderResult,
  screen
} from '@testing-library/react'
import { type ControlDefinition } from '~/models'
import { type PreviewRef } from '~/components'

describe('Preview', () => {
  it('should display a preview of the component', () => {
    renderComponent()
    const helloWorld = screen.queryByTestId('hello-world')
    expect(helloWorld).toMatchSnapshot()
  })

  it('should display caption and description', () => {
    const { baseElement } = renderComponent({
      caption: 'Caption',
      description: 'Description'
    })
    expect(baseElement).toMatchSnapshot()
  })

  it('should display controls', () => {
    renderComponent({ controls })
    const controlPanel = screen.getByTestId('component-demo-ui-controls')
    expect(controlPanel).toMatchSnapshot()
  })

  it('should change the state of the component using controls', () => {
    renderComponent({ controls })

    const helloWorld = screen.queryByTestId('hello-world')
    expect(helloWorld).toMatchSnapshot()

    const greetingControl = screen.getByTestId<HTMLSelectElement>(
      'component-demo-ui-control-greeting'
    )
    fireEvent.change(greetingControl, { target: { value: 'こんにちは' } })

    const nameControl = screen.getByTestId<HTMLInputElement>(
      'component-demo-ui-control-name'
    )
    fireEvent.change(nameControl, { target: { value: 'David' } })

    const hasEmojiControl = screen.getByTestId<HTMLInputElement>(
      'component-demo-ui-control-hasEmoji'
    )
    fireEvent.click(hasEmojiControl)

    expect(helloWorld).toMatchSnapshot()
  })

  it('should display the inspector', () => {
    renderComponent({ showInspector: true, inspectorTitle: 'Inspector' })
    const inspector = screen.getByTestId('component-demo-ui-inspector')
    expect(inspector).toMatchSnapshot()
  })

  it('should provide an interface to interact with the inspector', () => {
    renderComponent({
      showInspector: true,
      inspectorTitle: 'Inspector',
      onReady: (ref) => {
        ref.inspect({ hello: 'World' })
      }
    })
    const inspector = screen.getByTestId('component-demo-ui-inspector')
    expect(inspector).toMatchSnapshot()
  })
})

interface HelloWorldProps {
  greeting?: 'Hello' | 'Bonjour' | 'こんにちは'
  name?: string
  hasEmoji?: boolean
}

const HelloWorld: React.FC<HelloWorldProps> = ({
  greeting = 'Hello',
  name = 'World',
  hasEmoji = false
}) => (
  <div data-testid='hello-world'>
    {`${greeting}, ${name}`} {hasEmoji && '👋'}
  </div>
)

interface WrapperProps extends Partial<Omit<PreviewProps, 'children'>> {
  onReady?: (ref: PreviewRef) => void
}

const Wrapper: React.FC<WrapperProps> = ({
  title = 'Preview',
  onReady,
  ...restProps
}) => {
  const ref = useRef<PreviewRef>(null)
  useEffect(() => {
    if (ref.current != null) {
      onReady?.(ref.current)
    }
  }, [onReady])

  return (
    <Preview ref={ref} title={title} {...restProps}>
      <HelloWorld />
    </Preview>
  )
}

const renderComponent = (props: WrapperProps = {}): RenderResult =>
  render(<Wrapper {...props} />)

const controls: ControlDefinition[] = [
  {
    name: 'greeting',
    type: 'select',
    options: ['Hello', 'Bonjour', 'こんにちは'],
    initialValue: 'Bonjour'
  },
  {
    name: 'name',
    type: 'text',
    initialValue: 'Bob'
  },
  {
    name: 'hasEmoji',
    type: 'checkbox',
    initialValue: true
  }
]

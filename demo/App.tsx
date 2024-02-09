import React, { useCallback, useRef } from 'react'
import {
  type ControlDefinition,
  GitHubLink,
  Preview,
  type PreviewRef,
  type PropDescription,
  PropList,
  Section
} from '../src'
import { Switcher } from './switcher/Switcher'
import '../src/assets/styles/styles.css'
import './assets/demo.css'

export const App: React.FC = () => {
  const previewRef = useRef<PreviewRef>(null)
  const handleSwitcherChange = useCallback(
    (isChecked: boolean) => previewRef.current?.inspect({ isChecked }),
    []
  )

  return (
    <div>
      <GitHubLink url='https://github.com/qodunpob/component-demo-ui' />
      <Preview
        ref={previewRef}
        title='Switcher Component'
        caption='Component for switching between two states'
        description='Switcher is a pure component, which means it will only rerender when props or state are changed'
        controls={switcherControls}
        showInspector
        inspectorTitle='Please, click the switcher'
      >
        <Switcher onChange={handleSwitcherChange} />
      </Preview>
      <Section title='Props'>
        <PropList items={switcherProps} />
      </Section>
      <Section title='License'>
        <p>MIT.</p>
      </Section>
    </div>
  )
}

const switcherControls: ControlDefinition[] = [
  { name: 'labelOn', type: 'text', initialValue: 'On' },
  { name: 'labelOff', type: 'text', initialValue: 'Off' }
]

const switcherProps: PropDescription[] = [
  { propName: 'labelOn', description: 'label for the "on" state' },
  { propName: 'labelOff', description: 'label for the "off" state' },
  {
    propName: 'defaultChecked',
    description: 'indicator for setting the default switcher state'
  },
  {
    propName: 'onChange',
    description: (
      <>
        callback for state change event. Takes the state indicator as a
        parameter
        <br />
        <code>{'onChange: (isChecked: boolean) => void'}</code>
      </>
    )
  }
]

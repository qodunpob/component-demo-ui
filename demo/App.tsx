import React, { useCallback, useRef } from 'react'
import { GitHubLink, Preview, type PreviewRef } from '../src'
import { Switcher } from './switcher/Switcher'
import '../src/assets/styles/styles.css'
import './assets/demo.css'
import { type ControlDefinition } from '../src/components/preview/components'

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
        controls={switcherControls}
        showInspector
        inspectorTitle='Please, click the switcher'
      >
        <Switcher onChange={handleSwitcherChange} />
      </Preview>
    </div>
  )
}

const switcherControls: ControlDefinition[] = [
  { name: 'labelOn', type: 'text', initialValue: 'On' },
  { name: 'labelOff', type: 'text', initialValue: 'Off' }
]

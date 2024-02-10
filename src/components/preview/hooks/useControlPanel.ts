import { cloneElement, type ReactElement, useCallback, useState } from 'react'
import { mapControlsToState } from '../Preview.utils'
import { type ControlDefinition } from '~/models'

export interface UseControlPanelProps {
  children: ReactElement
  controls?: ControlDefinition[]
}

export interface UseControlPanelModel {
  component: ReactElement
  handleControlsChange: (name: string, value: any) => void
}

export const useControlPanel = ({
  children,
  controls
}: UseControlPanelProps): UseControlPanelModel => {
  const [componentProps, setComponentProps] = useState(
    mapControlsToState(controls)
  )

  const component = cloneElement(children, componentProps)

  const handleControlsChange = useCallback((name: string, value: any) => {
    setComponentProps((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }, [])

  return { component, handleControlsChange }
}

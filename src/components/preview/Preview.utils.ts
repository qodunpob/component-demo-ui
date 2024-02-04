import type { ControlDefinition } from './components'

export const mapControlsToState = (
  controls?: ControlDefinition[]
): Record<string, any> =>
  Object.fromEntries(
    (controls ?? []).map(({ name, initialValue }) => [name, initialValue])
  )

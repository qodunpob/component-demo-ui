import { useCallback, useEffect, useState } from 'react'

export interface UseSwitcherProps {
  defaultChecked?: boolean
  onChange?: (isChecked: boolean) => void
}

export interface UseSwitcherModel {
  isChecked: boolean
  toggle: () => void
}

export const useSwitcher = ({
  defaultChecked,
  onChange
}: UseSwitcherProps): UseSwitcherModel => {
  const [isChecked, setIsChecked] = useState(defaultChecked ?? false)

  const toggle = useCallback(() => {
    setIsChecked((prevState) => !prevState)
  }, [])

  useEffect(() => {
    onChange?.(isChecked)
  }, [isChecked, onChange])

  return { isChecked, toggle }
}

import { type ForwardedRef, useImperativeHandle, useState } from 'react'
import type { PreviewRef } from '../Preview.types'

export interface UseInspectorModel {
  data: any
}

export const useInspector = (
  ref: ForwardedRef<PreviewRef>
): UseInspectorModel => {
  const [data, setData] = useState<any>()

  useImperativeHandle(ref, () => ({
    inspect: (data) => {
      setData(data)
    }
  }))

  return {
    data
  }
}

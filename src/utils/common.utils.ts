export const isNotEmptyString = (
  value: string | undefined | null
): value is string => value != null && value !== ''

export const isNotEmptyArray = <T>(
  value: T[] | undefined | null
): value is T[] => value != null && value.length > 0

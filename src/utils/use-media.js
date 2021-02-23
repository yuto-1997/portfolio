import { useState, useEffect } from 'react'

export default function useMedia (queries, values, defaultValue) {
  const mediaQueryLists = queries.map(q => window.matchMedia(q))
  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches)
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueryLists.forEach(mql => mql.addListener(handler))
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
  }, [])

  return value
}

export function useDefaultMedia () {
  return useMedia(
    [
      '(min-width: 1200px)',
      '(min-width: 992px)',
      '(min-width: 768px)',
      '(min-width: 480px)'
    ],
    [
      {
        size: 'xl',
        description: 'laptops'
      },
      {
        size: 'l',
        descipriton: 'tablet-landscape'
      },
      {
        size: 'm',
        descipriton: 'tablet-portrait'
      },
      {
        size: 's',
        descipriton: 'mobile'
      }
    ],
    {
      size: 's',
      description: 'mobile'
    }
  )
}

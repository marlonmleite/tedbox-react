import { lazy } from 'react'

const Example1 = lazy(() => import('containers/Example1'))
const Example2 = lazy(() => import('containers/Example2'))
const Example3 = lazy(() => import('containers/Example3'))
const Example4 = lazy(() => import('containers/Example4'))

const example = [
  {
    path: '/exemplo-1',
    main: Example1,
    exact: true
  },
  {
    path: '/exemplo-2',
    main: Example2,
    exact: true
  },
  {
    path: '/exemplo-3',
    main: Example3,
    exact: true
  },
  {
    path: '/exemplo-4',
    main: Example4,
    exact: true
  }
]

export default example

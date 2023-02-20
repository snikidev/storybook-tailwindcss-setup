import { render } from '@testing-library/react'

import { Button } from './Button'

test('<Button /> renders correctly', () => {
  expect(render(<Button>Click me</Button>)).toMatchInlineSnapshot()
})

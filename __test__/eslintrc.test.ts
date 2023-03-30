import { describe, it, expect } from '@jest/globals'
import fs from 'fs'

describe('Eslint rules will output same markup', () => {
  it('match', () => {
    const text = fs.readFileSync('./__test__/test-markup.output.ts', 'utf8')

    expect(text).toMatchSnapshot()
  })
})

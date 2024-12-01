import { HelloWorld } from '#components'
import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'

it('mount HelloWord component and render text "Hello World"', () => {
  const component = mount(HelloWorld)
  expect(component.text()).toBe('Hello World')
})

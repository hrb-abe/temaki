import * as Enzyme from 'enzyme'
import * as React from 'react'
import { mountWithTheme } from '~/__test__/utils'
import * as Text from './index'

describe('Text', () => {
    let wrapper: Enzyme.ReactWrapper

    beforeEach(() => {
        wrapper = mountWithTheme(<Text.Component>Hello</Text.Component>)
    })

    it('should be defined', () => {
        expect(wrapper).toBeDefined()
    })
})

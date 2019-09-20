import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { mountWithTheme } from '../../__test__/utils'
import 'jest-styled-components'

import * as Textarea from './index'

describe('textarea', () => {
    let wrapper: Enzyme.ReactWrapper
    let mockOnChange: jest.Mock
    let mockOnFocus: jest.Mock
    let mockOnBlur: jest.Mock

    beforeEach(() => {
        mockOnChange = jest.fn()
        mockOnFocus = jest.fn()
        mockOnBlur = jest.fn()
        act(() => {
            wrapper = mountWithTheme(
                <Textarea.Component
                    value={'Testing Value'}
                    onChange={mockOnChange}
                    onFocus={mockOnFocus}
                    onBlur={mockOnBlur}
                />
            )
        })
    })

    it('コンポーネントが存在しているか', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('以前のスナップショットと一致しているか', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('onChangeが呼ばれたか', () => {
        const textareaEl = wrapper.find('textarea')
        act(() => {
            textareaEl.simulate('change')
            expect(mockOnChange).toHaveBeenCalled()
        })
    })

    it('onFocusが呼ばれたか', () => {
        const textareaEl = wrapper.find('textarea')
        act(() => {
            textareaEl.simulate('focus')
            expect(mockOnFocus).toHaveBeenCalled()
        })
    })

    it('onBlurが呼ばれたか', () => {
        const textareaEl = wrapper.find('textarea')
        act(() => {
            textareaEl.simulate('blur')
            expect(mockOnBlur).toHaveBeenCalled()
        })
    })

    it('onFocus時にCSSが効いているか', () => {
        act(() => {
            expect(wrapper).toHaveStyleRule('border-color', 'rgb(114,206,92)', {
                modifier: ':focus'
            })
        })
    })

    it('error時にCSSが効いているか', () => {
        wrapper = mountWithTheme(
            <Textarea.Component
                value={'Testing Value'}
                onChange={mockOnChange}
                onFocus={mockOnFocus}
                onBlur={mockOnBlur}
                errored
            />
        )
        expect(wrapper).toHaveStyleRule('border-color', 'rgb(224,85,72)')
    })
})

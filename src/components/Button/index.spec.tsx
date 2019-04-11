import * as Enzyme from 'enzyme'
import * as React from 'react'
import { act } from 'react-dom/test-utils'
import Button from './index'

describe('Button type of box', () => {
  let wrapper: Enzyme.ReactWrapper
  let mockOnClick: jest.Mock

  beforeEach(() => {
    mockOnClick = jest.fn()
    act(() => {
      wrapper = Enzyme.mount(
        <Button type="box" onClick={mockOnClick}>
          OK
        </Button>
      )
    })
  })

  it('should be defined', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match previous snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call onClick method by users click', () => {
    act(() => {
      wrapper.simulate('click')
    })
    expect(mockOnClick).toHaveBeenCalled()
  })
})

describe('Button type of circle', () => {
  let wrapper: Enzyme.ReactWrapper
  let mockOnClick: jest.Mock
  const mockIconSrc = 'http://example.com/example.svg'

  beforeEach(() => {
    mockOnClick = jest.fn()
    act(() => {
      wrapper = Enzyme.mount(<Button type="circle" onClick={mockOnClick} iconSrc={mockIconSrc} />)
    })
  })

  it('should be defined', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match previous snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call onClick method by users click', () => {
    act(() => {
      wrapper.simulate('click')
    })
    expect(mockOnClick).toHaveBeenCalled()
  })

  it('should render image from iconSrc', () => {
    const imageEl = wrapper.find('img')
    expect(imageEl.exists()).toBe(true)
    expect(imageEl.prop('src') === mockIconSrc).toBe(true)
  })
})

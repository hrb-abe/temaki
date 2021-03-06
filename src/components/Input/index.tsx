import * as React from 'react'

import * as NumberContainer from './containers/Number'
import * as TextContainer from './containers/Text'
import * as Presenter from './presenters/Default'

/**
 * Utils
 */
export type NumberValue = number
export type StringValue = string

const TEXT = 'text' as const
const NUMBER = 'number' as const

/**
 * Component
 */

type Props = {
    type?: string
    name?: string
    unit?: string
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onChangeNative?: (e: React.ChangeEvent<HTMLInputElement>) => void
    diff?: boolean
    placeholder?: string
    errored?: boolean
    errorMessage?: string
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    className?: string
    decimalPlace?: number | null
} & (
    | {
          format: typeof TEXT
          value: StringValue
          onChange: (value: StringValue) => void
      }
    | {
          format: typeof NUMBER
          value: NumberValue
          onChange: (value: NumberValue) => void
          type?: typeof NUMBER
      }
)
export const Component = React.memo<Props>(({ children: _, ...props }) => {
    const [value, setValue] = React.useState(props.value)
    const changeValue = React.useCallback(
        (value: string | number) => {
            props.onChange(value as never)
            setValue(value)
        },
        [props.onChange]
    )

    React.useLayoutEffect(() => setValue(props.value), [props.value])

    switch (props.format) {
        case NUMBER:
            return (
                <NumberContainer.Container
                    {...props}
                    onChange={changeValue}
                    /* Propsの型でUnionしてるので format=NUMBER のときは必ずnumberのはず */
                    value={value as number}
                    Presenter={Presenter.Presenter}
                    decimalPlace={props.decimalPlace}
                />
            )
        case TEXT:
            return (
                <TextContainer.Container
                    {...props}
                    onChange={changeValue}
                    /* Propsの型でUnionしてるので format=STRING のときは必ずstringのはず */
                    value={value as string}
                    Presenter={Presenter.Presenter}
                />
            )
    }
})

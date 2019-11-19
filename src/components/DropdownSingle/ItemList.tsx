import * as React from 'react'
import styled, { defaultTheme } from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    items: Item[]
    selected: Value
    onClickItem: (value: Value) => void
    className?: string
    isVisible: boolean
    width: number
}

export const Component = React.memo<Props>(
    ({ items, selected, onClickItem, className, isVisible, width }) => {
        return (
            <ItemList
                data-test="itemList"
                className={`${className} ${isVisible ? '' : 'hide'}`}
                width={width}
            >
                {items.map(renderItem(selected, onClickItem))}
            </ItemList>
        )
    }
)

const renderItem = (selected: Value, onClickItem: (value: Value) => void) => (
    item: Item,
    index: number
) => {
    return (
        <ItemComponent
            item={item}
            key={index}
            selected={selected}
            onClickItem={onClickItem}
        />
    )
}

/**
 * ItemComponent
 */

export type Item = {
    value: Value
    text: string
}
export type Value = string

type ItemProps = {
    item: Item
    selected: Value
    onClickItem: (value: Value) => void
}

const ItemComponent = React.memo<ItemProps>(props => {
    const handleClick = React.useCallback(() => {
        props.onClickItem(props.item.value)
    }, [props.onClickItem, props.item])

    return (
        <Item onClick={handleClick}>
            <Icon.Component
                svg={IconFiles.icons.SingleCheck}
                size="24px"
                color={
                    props.item.value === props.selected
                        ? defaultTheme.colors.primary.default
                        : defaultTheme.colors.grayScale.S10
                }
            />
            <Text>{props.item.text}</Text>
        </Item>
    )
})

/**
 * Styles
 */

const ItemList = styled.ul<{ width: number }>`
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.dropShadow.L5};
    width: ${props => props.width}px;
    max-width: 262px;
    max-height: 204px;
    overflow: auto;
`

const Item = styled.li`
    list-style-type: none;
    padding: 12px 12px 0 12px;
    user-select: none;
    font-size: 14px;
    display: flex;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.colors.primary.N60};
    }
`

const Text = styled.div`
    padding-left: 4px;
`

import * as React from 'react';
/**
 * Component
 */
declare type Props = {
    items: Item[];
    value: Value;
    onClickItem: (value: Value) => void;
    className?: string;
    isVisible?: boolean;
    onBlurSearchValue?: () => void;
    filteredItems?: Item[];
};
export declare const Component: React.NamedExoticComponent<Props>;
/**
 * ItemComponent
 */
export declare type Item = {
    value: Value;
    text: string;
};
export declare type Value = string;
export {};

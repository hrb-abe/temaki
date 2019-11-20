import * as React from 'react';
import * as ItemList from '../ItemList';
/**
 * Component
 */
declare type Props = {
    placeholder: string;
    items: ItemList.Item[];
    selected: ItemList.Value;
    isError: boolean;
    width: number;
    onClickItem: (value: ItemList.Value) => void;
};
export declare const Component: React.NamedExoticComponent<Props>;
export {};
import {FC, PropsWithChildren} from 'react';
import {Theme} from './theme';
import {StyleProp} from 'react-native';

export type PropertyParams = {
  theme: Theme;
};

export type StyleFunction<P, R> = (props: P & PropertyParams) => R;

export type CustomStyle<S, P> = {
  [K in keyof S]?: S[K] | StyleFunction<P, S[K]>;
};

export type StyledComponent<T> = FC<PropsWithChildren<T>>;

export type StyledFunction<P, S> = <T extends Object>(
  style?: CustomStyle<S, T> | undefined,
) => StyledComponent<P & T>;

export type BaseProps<P> = {
  style?: StyleProp<P> | undefined;
  [key: string]: any;
};

export interface StyleBuilder<P, S> {
  (props: P, theme: Theme): S;
}

export const EMPTY_OBJ = {};

export const DefaultBuilder: StyleBuilder<any, any> = () => EMPTY_OBJ;
